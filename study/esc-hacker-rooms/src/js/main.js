import ApiBackend from "./ApiBackend";
import FullChallengesList from "./FullChallengesList";
import Menu from "./Menu";
import Top3ChallengeList from "./Top3ChallengeList";

const menu = new Menu();
menu.add();

const backend = new ApiBackend("https://lernia-sjj-assignments.vercel.app/api");

const isHomePage = document.querySelector(".ctas") != null;

const challengeList = isHomePage ? new Top3ChallengeList(backend) : new FullChallengesList(backend);
challengeList.start(document.querySelector('.popular-rooms'), document);