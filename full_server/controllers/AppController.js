/**
 * Contains the miscellaneous route handlers.
 * @author Thando Siluma <https://github.com/Angel291985>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
