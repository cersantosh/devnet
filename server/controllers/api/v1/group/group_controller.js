import GroupService from "../../../../service/group/group_service.js";
const groupService = new GroupService();

class GroupController {
  async createGroup(req, res) {
    try {
      const group = await groupService.createGroup(req.body);
      res.status(200).json({
        success: true,
        message: "Group created successfully",
        response: group,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllGroups(req, res) {
    try {
      const allGroups = await groupService.getAllGroups();
      res.status(200).json({
        success: true,
        message: "All groups fetched successfully",
        count: allGroups.length,
        response: allGroups,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }


  async fetchGroupById(req, res) {
    try {
      const { id } = req.params;
      const group = await groupService.fetchGroupById(id);
      res.status(200).json({
        success: true,
        message: "Group fetched with id",
        response: group,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editGroupById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const group = await groupService.editGroupById(id, data);
      res.status(200).json({
        success: true,
        message: "Group updated with id",
        response: group,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteGroupById(req, res) {
    try {
      const { id } = req.params;
      const group = await groupService.deleteGroupById(id);
      res.status(200).json({
        success: true,
        message: "Group deleted.",
        response: group,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async searchGroup(req, res) {
    try {
      const { search_term } = req.query;
      const groups = await groupService.searchGroup(search_term);
      res.status(200).json({
        success: true,
        message: "Group searched with given search term",
        response: groups,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterGroup(req, res) {
    try {
      const query = req.query;
      const groups = await groupService.filterGroup(query);
      res.status(200).json({
        success: true,
        message: "Group filtered with given filter options",
        response: groups,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}

export default GroupController;
