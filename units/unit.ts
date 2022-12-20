export default interface unit {
    code: {
        title: string;
        location: string;
        attendanceModes: string[];
        creditPoints: number;
        prerequisites: string;
        antirequisites: string;
        equivalents: string;
        coordinatorName: string;
        coordinatorEmail: string;
        CSPStudentContribution: number;
        domesticTuition: number;
        internationalTuition: number;
    }
};
