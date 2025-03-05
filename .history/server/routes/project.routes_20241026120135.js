import express from 'express'
    import projectCtrl from '../controllers/project.controller.js' 
    const router = express.Router()
    router.route('/api/projects').__________(projectCtrl.create)
    router.route('/api/projects').__________(projectCtrl.list)
    router.route('/api/projects').delete(projectCtrl.___________)
    router.param('projectId', projectCtrl.projectByID)
    router.route('/api/projects/:projectId').__________(projectCtrl.read)
    router.route('/api/projects/:projectId').__________(projectCtrl.update)
    router.route('/api/projects/:projectId').delete(projectCtrl.remove)

    export default router


