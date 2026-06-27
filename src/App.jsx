import { useState } from 'react'
import MainNav from './components/MainNav'
import HeroSection from './components/HeroSection'
import SocialProofBar from './components/SocialProofBar'
import AudienceSection from './components/AudienceSection'
import OutcomesSection from './components/OutcomesSection'
import CurriculumSection from './components/CurriculumSection'
import FacultySection from './components/FacultySection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import BonusSection from './components/BonusSection'
import GuaranteeSection from './components/GuaranteeSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import SyllabusModal from './components/SyllabusModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <MainNav onDownload={openModal} />
      <HeroSection onDownload={openModal} />
      <SocialProofBar />
      <AudienceSection />
      <OutcomesSection />
      <CurriculumSection />
      <FacultySection />
      <TestimonialsSection />
      <PricingSection onDownload={openModal} />
      <BonusSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA onDownload={openModal} />
      <Footer />
      {isModalOpen && <SyllabusModal onClose={closeModal} />}
    </div>
  )
}

export default App
