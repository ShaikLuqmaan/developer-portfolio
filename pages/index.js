import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import Homepage from '../components/Homepage';

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Luqmaan Shaik - Web Developer"
      description="Developer portfolio."
    >
      <Homepage/>
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
