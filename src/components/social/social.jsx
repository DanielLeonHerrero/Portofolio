import GithubIcon from "../svg/social/github"
import LinkedinIcon from "../svg/social/linkedin"
import SocialElement from "./socialElement/socialElement"


const Social = () => {

    const handlerSocial = (url) => {
        window.open(url, '_blank')
    }

    return (
        <>
            <div className="flex gap-2">
                <SocialElement svg={<LinkedinIcon />} onClick={ () => handlerSocial("https://www.linkedin.com/in/daniel-leon-herrero-52b529296/")} />
                <SocialElement svg={<GithubIcon />} onClick={ () => handlerSocial("https://github.com/DanielLeonHerrero")}/>
            </div>
        </>
    )
}

export default Social