"use client"
import "./home.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      <motion.header
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="left-div">
          <div className="left-childs">
            <motion.p className="p1" variants={staggerItem}>
              Hi, I am
            </motion.p>
            <motion.h1 variants={staggerItem}>Muhammed Azaz</motion.h1>
            <motion.p className="p2" variants={staggerItem}>
              Front-end Developer / UI Designer
            </motion.p>
            <motion.div className="platforms" variants={staggerItem}>
              <motion.div className="bg" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <img src="./src/assets/header/Vector.png" alt="" />
              </motion.div>

              <motion.div className="bg" whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <img src="./src/assets/header/Vector (2).png" alt="" />
              </motion.div>

              <motion.div className="bg" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <img src="./src/assets/header/Vector (3).png" alt="" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="right-div">
          <motion.img
            className="tringle"
            src="./src/assets/header/Rectangle 67.png"
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.img
            className="character"
            src="./src/assets/header/image 17.png"
            alt=""
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Mobile View */}
        <motion.img
          className="phone-character"
          src="./src/assets/header/image 17.png"
          alt=""
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
        <div className="phone-veiw">
          <motion.img
            className="rectangle83"
            src="./src/assets/header/Rectangle 83.png"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.img
            className="rectangle82"
            src="./src/assets/header/Rectangle 82.png"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div className="intro" variants={staggerContainer} initial="hidden" animate="visible">
            <div className="part-1">
              <motion.p className="p1" variants={staggerItem}>
                Hi, I am
              </motion.p>
              <motion.h1 variants={staggerItem}>Muhammed Azaz</motion.h1>
              <motion.p className="p2" variants={staggerItem}>
                Front-end Developer / UI Designer
              </motion.p>
            </div>
            <motion.div className="part2" variants={staggerItem}>
              <motion.img
                src="./src/assets/header/Vector.png"
                alt=""
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.img
                src="./src/assets/header/Vector (2).png"
                alt=""
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.img
                src="./src/assets/header/Vector (3).png"
                alt=""
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      <motion.div
        className="it-berries"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="./src/assets/logo/Logo ITB.png"
          alt=""
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="detail"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            IT BERRIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem
            sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus,
            lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit
            amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra.
            Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            READ MORE
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        id="about"
        className="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.button
          className="a-b-1"
          variants={staggerItem}
          whileHover={{ scale: 1.05, borderColor: "#00ffff" }}
          whileTap={{ scale: 0.95 }}
        >
          ABOUT ME
        </motion.button>
        <motion.p variants={staggerItem}>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem
          sed viverra. In vel urna quis libero viverra facilisis ut ac est.
        </motion.p>
        <motion.button className="a-b-2" variants={staggerItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          EXPLORE
        </motion.button>
        <motion.img className="devider" src="./src/assets/devider/separatorBlack 1.png" variants={staggerItem} />
      </motion.div>

      <motion.div
        className="skills-compo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="skills"
          style={{ padding: "20px 35px" }}
          variants={staggerItem}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="./src/assets/skills/136378-200 1.png" alt="" />
          <h2>DESIGN</h2>
          <p>
            I can design the site based on your needs and suggestions. I can also design the site from scratch and
            consult you during the job.
          </p>
        </motion.div>
        <motion.div
          className="skills"
          style={{ padding: "23px 50px" }}
          variants={staggerItem}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="./src/assets/skills/maintenance--v3 1.png" alt="" />
          <h2>DEVELOPMENT</h2>
          <p>
            I can design the site based on your needs and suggestions. I can also design the site from scratch and
            consult you during the job.
          </p>
        </motion.div>
        <motion.div
          className="skills"
          style={{ padding: "30px 65px" }}
          variants={staggerItem}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="./src/assets/skills/img_533288 1.png" alt="" />
          <h2>MAINTENANCE</h2>
          <p>
            I can design the site based on your needs and suggestions. I can also design the site from scratch and
            consult you during the job.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="others"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.img className="devider" src="./src/assets/devider/separatorBlack 1.png" alt="" variants={staggerItem} />
        <motion.button
          id="skills"
          className="a-b-1"
          variants={staggerItem}
          whileHover={{ scale: 1.05, borderColor: "#00ffff" }}
          whileTap={{ scale: 0.95 }}
        >
          SKILLS
        </motion.button>
      </motion.div>

      <motion.div
        className="using-now"
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h1 variants={staggerItem}>USING NOW :</motion.h1>
        <motion.div className="current" variants={staggerContainer}>
          {[
            { src: "./src/assets/skills/HTML.svg", name: "HTML5" },
            { src: "./src/assets/skills/CSS.svg", name: "CSS3" },
            { src: "./src/assets/skills/JS.svg", name: "JAVASCRIPT" },
            { src: "./src/assets/skills/SASS.svg", name: "SASS" },
            { src: "./src/assets/skills/REACT.svg", name: "REACT" },
            { src: "./src/assets/skills/bootstrap.svg", name: "BOOTSTRAP" },
            { src: "./src/assets/skills/git.svg", name: "GIT" },
            { src: "./src/assets/skills/figma.svg", name: "FIGMA" },
          ].map((skill, index) => (
            <motion.p
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={skill.src || "/placeholder.svg"} alt={skill.name} />
              <span>{skill.name}</span>
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="learning"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h1 variants={staggerItem}>LEARNING :</motion.h1>
        <motion.div className="current" variants={staggerContainer}>
          {[
            { src: "./src/assets/skills/nodejs.png", name: "NODEJS" },
            { src: "./src/assets/skills/mySql.svg", name: "MYSQL" },
            { src: "./src/assets/skills/mongodb.png", name: "MONGODB" },
          ].map((skill, index) => (
            <motion.p
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={skill.src || "/placeholder.svg"} alt={skill.name} />
              <span>{skill.name}</span>
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        id="portfolio"
        className="portfolio"
        ref={portfolioRef}
        initial="hidden"
        animate={portfolioInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div className="myprojects" variants={staggerItem}>
          <motion.button whileHover={{ scale: 1.05, borderColor: "#00ffff" }} whileTap={{ scale: 0.95 }}>
            MyProjects
          </motion.button>
        </motion.div>

        <motion.div className="all-Projects" variants={staggerItem}>
          <p>All Completed Projects.</p>
        </motion.div>

        <motion.div className="projects" variants={staggerContainer}>
          {[1, 2, 3, 4].map((project, index) => (
            <motion.div
              key={index}
              className="pts"
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </motion.div>

        <motion.div className="many" variants={staggerItem}>
          <p>And many more to come!</p>
        </motion.div>
      </motion.div>

      <motion.div
        id="contact"
        className="contact"
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.button
          className="a-b-1"
          variants={staggerItem}
          whileHover={{ scale: 1.05, borderColor: "#00ffff" }}
          whileTap={{ scale: 0.95 }}
        >
          CONTACT
        </motion.button>
        <motion.p variants={staggerItem}>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem
          sed viverra. In vel urna quis libero viverra facilisis ut ac est.
        </motion.p>
        <motion.img src="./src/assets/devider/separatorBlack 1.png" alt="" variants={staggerItem} />
      </motion.div>

      <motion.div
        className="form-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="form-container" variants={staggerItem}>
          <form>
            <motion.input
              type="text"
              placeholder="ENTER YOUR NAME*"
              required
              whileFocus={{ scale: 1.02, borderColor: "#00ffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.input
              type="email"
              placeholder="ENTER YOUR EMAIL*"
              required
              whileFocus={{ scale: 1.02, borderColor: "#00ffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.input
              type="tel"
              placeholder="PHONE NUMBER"
              whileFocus={{ scale: 1.02, borderColor: "#00ffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.textarea
              placeholder="YOUR MESSAGE*"
              required
              whileFocus={{ scale: 1.02, borderColor: "#00ffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="submit-wrapper">
              <div className="line"></div>
              <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                SUBMIT
              </motion.button>
              <div className="line"></div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Home
