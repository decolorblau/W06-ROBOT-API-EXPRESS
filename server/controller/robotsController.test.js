const Robot = require("../../database/models/robot");
const { getRobots } = require("./robotsController");

jest.mock("../../database/models/robot");

describe("Given a getRobots function", () => {
  describe("When it receives an object res", () => {
    test("Then it should invoke the method json", async () => {
      // Arrange
      const robots = [
        {
          id: 1,
          name: "Atlas",
          imageUrl:
            "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_876/public/media/image/2021/08/boston-dynamics-2441569.jpg?itok=tAqvqKb-",
          features: {
            speed: 8,
            resistance: 10,
            creation: 2013,
          },
        },
        {
          id: 2,
          name: "Pepper",
          imageUrl:
            "https://revistaderobots.com/wp-content/uploads/2020/02/Robot-Pepper-qu%C3%A9-es-la-historia-del-robot-pepper-y-precio.jpg",
          features: {
            speed: 7,
            resistance: 6,
            creation: "2016",
          },
        },
      ];

      Robot.find = jest.fn().mockResolvedValue([]);
      const res = {
        json: jest.fn(),
      };

      // Act
      await getRobots(null, res);

      // Assert
      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(robots);
    });
  });
});
