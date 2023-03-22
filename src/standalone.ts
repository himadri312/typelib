export interface Coach {
    userId: number;
    userUUID: string;
}

export interface Patient {
    patientId: number;
    patientUuid: string;
}

export interface ParentMethods {
    showToast: (text: string) => void;
    onNoteCreated: () => void;
}