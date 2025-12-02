import About from "@/_components/About";
import Container from "@/_components/Container";
import Projects from "@/_components/Projects";
import Logo from "@/_components/Logo";
import LogoMain from "@/_components/LogoMain";
import Nav from "@/_components/Nav";
import DesignContest from "@/_components/DesignContest";
import LostLogosGalerry from "@/_components/LostLogosGallery";
import VisitCards from "@/_components/VisitCards";
import OldCpuPcFanScene from "@/_components/OldCpuPcFanScene";
import VokmenScene from "@/_components/VokmenScene";
import Print from "@/_components/Print";
import MainScene from "@/_components/MainScene";
import Threejs from "@/_components/Threejs";

export default function Home() {
  return (
    <>
      <Container>
        <Nav />
        <About />
        <Projects />
        <Logo />
        <LogoMain />
        <DesignContest />
        <LostLogosGalerry />
        <Print />
        <VisitCards />
        <Threejs />
        <OldCpuPcFanScene />
        <VokmenScene />
        <MainScene />
      </Container>
    </>
  );
}
