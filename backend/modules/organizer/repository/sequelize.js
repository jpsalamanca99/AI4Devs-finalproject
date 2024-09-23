import { OrganizerCreated } from "../entities/OrganizerCreated";

export class SequelizeOrganizerRepository {
  static add({ mock, ...data }) {
    if (mock) {
      return new OrganizerCreated({
        id: "1575ae53-b02c-4cb2-aaeb-cb19eaef055d",
        name: data.name,
        nid: data.nid
      });
    } else {
      return {};
    }
  }
}
