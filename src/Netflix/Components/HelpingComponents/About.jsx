import React from 'react'

function About() {
    return (
        <>
            <div className=" text-center text-capitalize mid-section" style={{
                padding: "10px", margin: '10px',
                backgroundColor: '#000000e3',
                borderRadius: '10px',
                padding: "10px",
                marginBottom: '30px'
            }}>
                <h1 className="Heading-h1" style={{ color:'#ff0713'}}>About </h1>
                <p className="Heading-h2" style={{ color: '#f1f1f1' }}>
                   security binds individuals and industries together and runs complex systems in our society.From credit card numbers and social security numbers to email addresses and phone numbers, our sensitive, personally identifiable information is important.This sort of information in unreliable hands can potentially have far - reaching consequences.
                    Companies or websites that handle customer information are required to publish their Privacy Policies on their business websites.If you own a website, web app, mobile app or desktop app that collects or processes user data, you most certainly will have to post a Privacy Policy on your website(or give in -app access to the full Privacy Policy agreement).
                </p>
            </div>
        </>
    )
}

export default About;
