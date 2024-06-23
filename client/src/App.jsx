import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import SignUp from "./pages/auth/signup.jsx";
import Home from "./pages/home/Home.jsx";
import CreateProfile from "./pages/profile/create_profile.jsx";
import JobPostingForm from "./pages/job/post_job.jsx";
import AskQuestionPage from "./pages/discussion/ask_a_question.jsx";
import JobDetailsPage from "./pages/job/job_details.jsx";
import JobsHomePage from "./pages/job/job_home.jsx";
import DiscussionHome from "./pages/discussion/discussion_home.jsx";
import QuestionDetailsPage from "./pages/discussion/question_details.jsx";
import Polls from "./pages/post/polls.jsx";
import EventUploadForm from "./pages/events/upload_event.jsx";
import PostUploadOptions from "./pages/post/post.jsx";
import EventsHome from "./pages/events/events_home.jsx";
import EventDetailsPage from "./pages/events/events_details.jsx";
import OwnProfilePage from "./pages/profile/own_profile.jsx";
import PostModal from "./components/post/post_modal.jsx";
import PollsModal from "./components/post/polls_modal.jsx";
import RichTextEditor from "./components/editor/rich_text_editor.jsx";
import ErrorDetailsPage from "./pages/discussion/error_details.jsx";
import JobsSettings from "./pages/job/jobs_settings.jsx";
import EventsSettings from "./pages/events/events_settings.jsx";
import AccountSettings from "./pages/settings/account_settings.jsx";
import QuestionsSettings from "./pages/discussion/questions_settings.jsx";
import AllMessages from "./pages/messages/message_list.jsx";
import GroupsHome from "./pages/groups/groups_home.jsx";
import GroupPage from "./pages/groups/group_page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login/>
    element: <Home />,
    // element: <RichTextEditor/>
    // element : <PostModal/>
    // element : <PollsModal/>
    // element : <OwnProfilePage/>
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
    path: "/create_profile",
    element: <CreateProfile />,
  },
  {
    path: "/polls",
    element: <Polls />,
  },
  {
    path: "/events",
    element: <EventsHome />,
  },
  {
    path: "/event_details",
    element: <EventDetailsPage />,
  },
  {
    path: "/upload_event",
    element: <EventUploadForm />,
  },
  {
    path: "/events_settings",
    element: <EventsSettings />,
  },
  {
    path: "/account_settings",
    element: <AccountSettings />,
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
    path: "/jobs_settings",
    element: <JobsSettings />,
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
    path: "/error_details",
    element: <ErrorDetailsPage />,
  },
  {
    path: "/questions_settings",
    element: <QuestionsSettings />,
  },
  {
    path: "/text_editor",
    element: <RichTextEditor />,
  },
  {
    path: "own_profile",
    element: <OwnProfilePage />,
  },
  {
    path: "message_list",
    element: <AllMessages />,
  },
  { path: "/groups", element: <GroupsHome /> },
  { path: "/group_page", element: <GroupPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
