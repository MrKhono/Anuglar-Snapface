import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

Injectable({
    providedIn: 'root',  //ce service doit enregistrer a la racine de l'app
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 200,
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snaps: 8
        },
        {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 50
        },
        {
            id: 4,
            title: 'Coding',
            description: 'Coder c\'est Top !',
            imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            createdDate: new Date(),
            snaps: 150
        },
        {
            id: 5,
            title: 'Photographer',
            description: 'Ability to Stop the time!',
            imageUrl: 'https://images.pexels.com/photos/2798257/pexels-photo-2798257.jpeg?auto=compress&cs=tinysrgb&w=1200',
            createdDate: new Date(),
            snaps: 100
        }
    ]; 

    getAllFaceSnap(): FaceSnap[]{
        return this.faceSnaps;
    };

    getFaceSnapId(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap Not Found!');
        }  else{
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'Snap' | 'unSnap'): void {
        const faceSnap = this.getFaceSnapId(faceSnapId);
        snapType === "Snap" ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}