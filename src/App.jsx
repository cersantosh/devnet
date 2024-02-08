import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import SignUp from "./pages/auth/signup.jsx";
import Home from "./pages/home/home.jsx";
import CreateProfile from "./pages/profile/create_profile.jsx";
import JobPostingForm from "./pages/job/post_job.jsx";
import PostUploadOptions from "./components/post/post.jsx";
import Polls from "./components/post/polls.jsx";
import EventUploadForm from "./components/post/event.jsx";
import AskQuestionPage from "./pages/discussion/ask_a_question.jsx";
import JobDetailsPage from "./pages/job/job_details.jsx";
import JobsHomePage from "./pages/job/job_home.jsx";
import DiscussionHome from "./pages/discussion/discussion_home.jsx";
import QuestionDetailsPage from "./pages/discussion/question_details.jsx";
import RichTextEditor from "./components/editor/text_editor.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login/>
    element: <Home />,
    // element : <PostUploadOptions/>
    // element : <AskQuestionPage/>
    // element : <Polls/>
    // element : <EventUploadForm/>
    // element : <CreateProfile/>
    // element : <JobPostingForm/>
    // element: <JobDetailsPage />,
    // element: <JobsHomePage />,
  },
  {
    path: "/polls",
    element: <Polls />,
  },
  {
    path: "/events",
    element: <EventUploadForm />,
  },
  {
    path: "/create_post",
    element: <PostUploadOptions />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/job_details",
    element: <JobDetailsPage />,
  },
  {
    path: "/jobs",
    element: <JobsHomePage />,
  },
  {
    path: "/post_job",
    element: <JobPostingForm />,
  },
  {
    path: "/discussion",
    element: <DiscussionHome />,
  },
  {
    path: "/ask_question",
    element: <AskQuestionPage />,
  },
  {
    path: "/question_details",
    element: <QuestionDetailsPage />,
  },
  {
    path: "/text_editor",
    element: <RichTextEditor />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
