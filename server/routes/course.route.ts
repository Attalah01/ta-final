import express from "express"
import { isAuthenticated } from "../middleware/auth"
import { authorizeRole } from "../controllers/user.controller"
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, getAllCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller"

const courseRouter = express.Router()

courseRouter.post("/create-course", isAuthenticated, authorizeRole("admin"), uploadCourse)

courseRouter.put("/course-update/:id", isAuthenticated, authorizeRole("admin"), editCourse)

courseRouter.get("/get-course/:id", getSingleCourse)

courseRouter.get("/get-course", getAllCourses)

courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser)

courseRouter.put("/add-question", isAuthenticated, addQuestion)

courseRouter.put("/add-answer", isAuthenticated, addAnswer)

courseRouter.put("/add-review/:id", isAuthenticated, addReview)

courseRouter.put("/add-reply", isAuthenticated, authorizeRole("admin"), addReplyToReview)

courseRouter.get("/get-courses", isAuthenticated, authorizeRole("admin"), getAllCourse)

courseRouter.delete("/delete-course/:id", isAuthenticated, authorizeRole("admin"), deleteCourse)

export default courseRouter