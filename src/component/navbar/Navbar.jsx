"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"
import { FaBarsStaggered } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes } from "react-icons/fa"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setSidebarOpen(false)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <motion.div
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="logo" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <h1>MyResume</h1>
          <img src="./assets/logo/logo.png" alt="" />
        </motion.div>

        <ul className="links">
          <motion.li onClick={() => scrollToSection("about")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            About me
          </motion.li>
          <motion.li onClick={() => scrollToSection("skills")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Skills
          </motion.li>
          <motion.li onClick={() => scrollToSection("portfolio")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Portfolio
          </motion.li>
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 6px aqua" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            CONTACT ME
          </motion.button>
        </ul>

        <motion.div className="bar" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleSidebar}>
          <FaBarsStaggered />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="sidebar-header">
              <motion.div className="close-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleSidebar}>
                <FaTimes />
              </motion.div>
            </div>
            <ul>
              <motion.li onClick={() => scrollToSection("about")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                About me
              </motion.li>
              <motion.li onClick={() => scrollToSection("skills")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Skills
              </motion.li>
              <motion.li onClick={() => scrollToSection("portfolio")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Portfolio
              </motion.li>
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 6px aqua" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                CONTACT ME
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
