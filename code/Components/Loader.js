import { Text, Image } from 'react-native'
import { useFonts } from 'expo-font'

const Loader = () => {

    const [loaded] = useFonts({
        'Montserrat': require('../assets/fonts/Montserrat-SemiBold.otf'),
    })

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Image source={require('../images/DejaLogo.png')} />
            <Text className="text-white mt-4 text-3xl font-[Montserrat]">Deja</Text>
        </>
    )
}

export default Loader