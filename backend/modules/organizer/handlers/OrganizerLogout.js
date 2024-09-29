
export class OrganizerLogout {
  static validations = [];

  static async run(req, res) {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).json({ message: 'Could not log out' });
      }
      res.status(200).json({ message: 'Logout successful' });
    })
  }
}
