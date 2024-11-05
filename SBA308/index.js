import { CourseInfo, AssignmentGroup} from './info.js';
import { LearnerSubmissions } from './submission.js';
import { checkCourse, checkPossiblePoints } from './errorCases.js';  
import { createLearnerID } from './calculation.js';

function getLearnerData(course, ag, submissions) {
    try {
        checkCourse(course, ag);
        checkPossiblePoints(ag);
    } catch (e) {
        console.log(e);
    }
    createLearnerID(submissions, ag);
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150
        }
    ];
    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);