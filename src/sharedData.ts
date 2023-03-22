import { Coach, Patient } from "./standalone";

export interface SharedData {
    patient: Patient;
    coach: Coach;
    SharedData: SharedData;
}