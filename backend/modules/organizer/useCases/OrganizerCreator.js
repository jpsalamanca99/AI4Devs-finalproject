export class OrganizerCreator {
  run(cmd) {
    return SequelizeOrganizerRepository.add(cmd);
  }
}
