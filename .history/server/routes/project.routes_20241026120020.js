import express from 'express'
    import projectCtrl from '../controllers/project.controller.js' 
    const router = express.Router()
    router.route('/api/projects').t(projectCtrl.create)
    router.route('/api/projects').get(projectCtrl.list)
    router.route('/api/projects').delete(projectCtrl.removeMany)
    router.param('projectId', projectCtrl.projectByID)
    router.route('/api/projects/:projectId').get(projectCtrl.read)
    router.route('/api/projects/:projectId').put(projectCtrl.update)
    router.route('/api/projects/:projectId').delete(projectCtrl.remove)

    export default router


