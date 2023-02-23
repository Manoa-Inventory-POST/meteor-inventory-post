import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../stuff/StuffCollection';
import { AdminProfiles } from '../user/AdminProfileCollection';
import { UserProfiles } from '../user/UserProfileCollection';
import { StudentProfiles } from '../user/StudentProfileCollection';
import { FacultyProfiles } from '../user/FacultyProfileCollection';
import { OfficeProfiles } from '../user/OfficeProfileCollection';
import { ITSupportProfiles } from '../user/ITSupportProfileCollection';
import { AdvisorProfiles } from '../user/AdvisorProfileCollection';
import { OccupantRoom } from '../room/OccupantRoom';
import { Phone } from '../room/Phone';
import { Ports } from '../room/Ports';
import { ReservationForm } from '../reserveform/ReservationCollection';
import { Room } from '../room/RoomCollection';
import { Clubs } from '../clubs/Clubs';
import { ClubAdvisor } from '../clubs/ClubAdvisor';

class MATPClass {
  collections;

  collectionLoadSequence;

  collectionAssociation;

  constructor() {
    // list of all the MATPCollections collections
    this.collections = [
      AdminProfiles,
      Stuffs,
      UserProfiles,
      StudentProfiles,
      FacultyProfiles,
      OfficeProfiles,
      ITSupportProfiles,
      AdvisorProfiles,
      OccupantRoom,
      Phone,
      Ports,
      ReservationForm,
      Room,
      Clubs,
    ];
    /*
     * A list of collection class instances in the order required for them to be sequentially loaded from a file.
     */
    this.collectionLoadSequence = [
      AdminProfiles,
      UserProfiles,
      Stuffs,
      StudentProfiles,
      FacultyProfiles,
      OfficeProfiles,
      ITSupportProfiles,
      AdvisorProfiles,
      OccupantRoom,
      Phone,
      Ports,
      ReservationForm,
      Room,
      ClubAdvisor,
    ];

    /*
     * An object with keys equal to the collection name and values the associated collection instance.
     */
    this.collectionAssociation = {};
    this.collections.forEach((collection) => {
      this.collectionAssociation[collection.getCollectionName()] = collection;
    });

  }

  /**
   * Return the collection class instance given its name.
   * @param collectionName The name of the collection.
   * @returns The collection class instance.
   * @throws { Meteor.Error } If collectionName does not name a collection.
   */
  getCollection(collectionName) {
    // console.log('MATPCollections', collectionName, this.collectionAssociation);
    const collection = this.collectionAssociation[collectionName];
    if (!collection) {
      throw new Meteor.Error(`Called MATPCollections.getCollection with unknown collection name: ${collectionName}`);
    }
    return collection;
  }
}

export const MATPCollections = new MATPClass();
