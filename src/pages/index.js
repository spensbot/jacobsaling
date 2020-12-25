import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hood from '../components/hood'
import jacob from '../images/jacob.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Meet your instructor</h1>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: '0 -1rem'}}>
        <div style={{width: '15rem', maxWidth: '80vw', height: '15rem', margin: '1rem'}}>
          {/* <Jacob /> */}
          <img alt="Jacob Saling, Flight Instructor" src={jacob} style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: '50%'}}/>
        </div>
        <div style={{flex: '1 0 15rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '1rem'}}>
          <p>Name's Jacob,</p>
          <p>I'm a Certified Flight Instructor based out of <a href="http://gorgewindsinc.com/">Gorge Winds Aviation</a> in Troutdale, Or.</p>
          <p>I love flying, and I love sharing that passion with my students. Give me a call, and we'll get you into a plane.</p>
          <p>503-729-3476 | jacob0saling@gmail.com</p>
        </div>
      </div>
      <div style={{textAlign:'center', margin: '0 0 3rem 0'}}>
        <hr/>
        {/* <p style={{margin: '2rem 0'}}>Private | Commercial | Instrument | Multi-Engine</p> */}
        <ul style={{listStyle: 'none', marginLeft: 0}}>
          <li>Private</li>
          <li>Commercial</li>
          <li>Instrument</li>
          <li>Multi-Engine</li>
        </ul>
        <hr/>
      </div>
    </div>
    
    <div style={{width: '90vw', maxWidth: '30rem', margin: 'auto', position: 'relative'}}>
      <Hood />
      <div style={{padding: '1rem', position: 'absolute', top: '60%', bottom: 0, left: 0, right: 0, color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Fly with me</h1>
        <p style={{margin: '0 0 0.5rem'}}>503 729 3476</p>
        <p style={{margin: '0 0 0.5rem'}}>jacob0saling@gmail.com</p>
      </div>
    </div>

  </Layout>
)

export default IndexPage
