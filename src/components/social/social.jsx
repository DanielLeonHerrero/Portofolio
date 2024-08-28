import GithubIcon from "../svg/social/github"
import LinkedinIcon from "../svg/social/linkedin"
import SocialElement from "./socialElement/socialElement"


const Social = () => {
    return (
        <>
            <div className="flex gap-2">
                <SocialElement svg={<LinkedinIcon />} />
                <SocialElement svg={<GithubIcon />} />
            </div>
        </>
    )
}

export default Social