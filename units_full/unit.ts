export default interface unit {
    code: string;
    title: string;
    teachingPeriod: string;
    startDate: string;
    endDate: string;
    location: string;
    attendanceModes: string[];
    outlineURL: string;
    creditPoints: number;
    prerequisites: string;
    antirequisites: string;
    equivalents: string;
    coordinatorName: string;
    coordinatorEmail: string;
    CSPStudentContribution: number;
    domesticTuition: number;
    internationalTuition: number;
};
