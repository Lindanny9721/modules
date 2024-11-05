export const learnersInfo = [];

export function createLearnerID(submissions, ag) {
    submissions.forEach(element => {
        let index = learnersInfo.findIndex(student => student.id === element.learner_id);
        if (index === -1) {
            learnersInfo.push({
                id: element.learner_id,
                submissions: []
            });
            index = learnersInfo.length - 1;
        }
        learnersInfo[index].submissions.push({
            assignment_id: element.assignment_id,
            submitted_at: element.submission.submitted_at,
            score: element.submission.score
        });
    });
    learnersGrade(learnersInfo, ag);
}

export function learnersGrade(data, ag) {
    const learnersData = [];
    for (let i in data) {
        let totalAssignmentscore = 0;
        let totalScore = 0;
        const gradedAssignment = {};
        for (let j = 0; j < data[i].submissions.length; j++) {
            for (let k = 0; k < ag.assignments.length; k++) {
                if (data[i].submissions[j].assignment_id === ag.assignments[k].id) {
                    if (data[i].submissions[j].submitted_at === ag.assignments[j].due_at) {
                        gradedAssignment[data[i].submissions[j].assignment_id] = data[i].submissions[j].score / ag.assignments[k].points_possible;
                        totalScore += data[i].submissions[j].score;
                        totalAssignmentscore += ag.assignments[k].points_possible;
                        break;
                    } else if (data[i].submissions[j].submitted_at > ag.assignments[j].due_at) {
                        gradedAssignment[data[i].submissions[j].assignment_id] = (data[i].submissions[j].score - (ag.assignments[k].points_possible / 10)) / ag.assignments[k].points_possible;
                        totalScore += data[i].submissions[j].score - ag.assignments[k].points_possible / 10;
                        totalAssignmentscore += ag.assignments[k].points_possible;
                        break;
                    }
                }
            }
        }
        learnersData.push({
            id: data[i].id,
            avg: totalScore / totalAssignmentscore,
            gradedAssignment
        });
    }
    console.log(learnersData);
}