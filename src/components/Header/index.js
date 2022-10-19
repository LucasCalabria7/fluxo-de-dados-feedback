import {TitleHeader, HeaderProfile, ImgProfile, NamePhoto} from './styled'

export const Header = (props) => {
    return(
        <>
        <TitleHeader>
            Insta4
        </TitleHeader>
        <HeaderProfile>
                <NamePhoto>{props.object.name}</NamePhoto>
                <ImgProfile src={props.object.profilePic} alt='Profile Pic' />
        </HeaderProfile>
        </>
    )
}