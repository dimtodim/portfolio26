import About from "@/_components/About";
import Container from "@/_components/Container";
import Projects from "@/_components/Projects";
import Logo from "@/_components/Logo";
import LogoMain from "@/_components/LogoMain";
import Nav from "@/_components/Nav";
import DesignContest from "@/_components/DesignContest";
import LostLogosGalerry from "@/_components/LostLogosGallery";
import VisitCards from "@/_components/VisitCards";
import Vjezba from "@/_components/Vjezba";
import OldCpuPcFanScene from "@/_components/OldCpuPcFanScene";
import VokmenScene from "@/_components/VokmenScene";

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
        <VisitCards />
        <Vjezba />
        <div className="h-[270px]"></div>
        <OldCpuPcFanScene />
        <VokmenScene />
      </Container>
    </>
  );
}
