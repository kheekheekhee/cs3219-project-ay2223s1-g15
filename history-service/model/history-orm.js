import {
  addHistory,
  getUserHistory,
} from './repository.js'

export const ormAddHistory = async (user, title, code, interviewerNotes, personalNotes, question, difficulty, interviewer) => {
  try {
    const newUserHistory = await addHistory({ user, title, code, interviewerNotes, personalNotes, question, difficulty, interviewer });
    newUserHistory.save();
    return true;
  } catch (err) {
    console.log(`ERROR: Could not add history for ${user}`);
    return { err };
  }
};

export const ormGetUserHistory = async (user) => {
  try {
    const history = await getUserHistory(user);

    if (history.length) {
      return history;
    } 

    return {};
  } catch (err) {
    return { err }
  }
};
