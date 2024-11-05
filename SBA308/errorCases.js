export function checkCourse(course, ag) {
    if (course.id !== ag.course_id) {
        throw new Error('Course ID does not match Assignment Group course ID!');
    }
}

export function checkPossiblePoints(ag) {
    for (let i = 0; i < ag.assignments.length; i++) {
        if (ag.assignments[i].points_possible === 0) {
            throw new Error("Assignment points can't be zero!");
        } else if (typeof ag.assignments[i].points_possible === 'string') {
            throw new Error("Assignment points must be a number, not a string!");
        }
    }
}