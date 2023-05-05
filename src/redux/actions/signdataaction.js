import { db } from "../../firebase";

import {
  collection,
  getDocs,
  doc,
  setDoc,
  where,
  query,
} from "firebase/firestore";

import {
  ADD_SIGN_DATA_FAIL,
  ADD_SIGN_DATA_REQ,
  ADD_SIGN_DATA_SUCCESS,
  GET_SIGN_DATA_FAIL,
  GET_SIGN_DATA_REQ,
  GET_SIGN_DATA_SUCCESS,
  GET_TOP_USERS_FAIL,
  GET_TOP_USERS_REQ,
  GET_TOP_USERS_SUCCESS,
} from "../action-types";
import Cookies from "js-cookie";

export const getSignData = () => async (dispatch) => {
  let signData = [];

  const logedInUser = await JSON.parse(Cookies.get("sign-language-ai-user"));

  async function getData(db) {
    const noteCol = collection(db, "SignData");

    const UserSpecificData = query(
      noteCol,
      where("userId", "==", logedInUser.userId)
    );

    const noteSnapshot = await getDocs(UserSpecificData);

    const Data = noteSnapshot.docs.map((doc) => doc.data());

    return Data;
  }

  try {
    dispatch({
      type: GET_SIGN_DATA_REQ,
    });

    signData = await getData(db);

    dispatch({
      type: GET_SIGN_DATA_SUCCESS,
      payload: signData,
    });
  } catch (error) {
    dispatch({
      type: GET_SIGN_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addSignData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_SIGN_DATA_REQ,
    });

    await setDoc(doc(db, "SignData", data.id), {
      userId: data.userId,
      id: data.id,
      username: data.username,
      createdAt: data.createdAt,
      signsPerformed: data.signsPerformed,
      secondsSpent: data.secondsSpent,
    });

    dispatch({
      type: ADD_SIGN_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_SIGN_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTopUsers = () => async (dispatch) => {
  let allData = [];

  async function getData(db) {
    const noteCol = collection(db, "SignData");

    const noteSnapshot = await getDocs(noteCol);

    const Data = noteSnapshot.docs.map((doc) => doc.data());

    return Data;
  }

  try {
    dispatch({
      type: GET_TOP_USERS_REQ,
    });

    allData = await getData(db);

    // group data by username
    const groupedData = allData.reduce((acc, curr) => {
      if (!acc[curr.username]) {
        acc[curr.username] = [];
      }
      acc[curr.username].push(curr);
      return acc;
    }, {});

    
    // get maximum count object for each group
    let uniqueData = Object.values(groupedData).map((group) => {
      return group.reduce((maxObj, obj) => {
        return obj.signsPerformed.reduce((acc, curr) => acc + curr.count, 0) >
          maxObj.signsPerformed.reduce((acc, curr) => acc + curr.count, 0)
          ? obj
          : maxObj;
      });
    });

    uniqueData.sort(
      (a, b) =>
        b.signsPerformed.reduce((acc, curr) => acc + curr.count, 0) -
        a.signsPerformed.reduce((acc, curr) => acc + curr.count, 0)
    );
 
    
    uniqueData = uniqueData.slice(0, 3);

    // add rank property to each object
    uniqueData.forEach((obj, index) => {
      obj.rank = index + 1;
    });

    // create new array with only name and rank properties
    const dataForRankBoard = uniqueData.map((obj) => ({
      username: obj.username,
      rank: obj.rank,
    }));

    dispatch({
      type: GET_TOP_USERS_SUCCESS,
      payload: dataForRankBoard,
    });
    
  } catch (error) {
    dispatch({
      type: GET_TOP_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
