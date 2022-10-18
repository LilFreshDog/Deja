import { SafeAreaView } from 'react-native'
import Loader from "./Components/Loader"

export default function App() {
	return (
		<SafeAreaView className="bg-black flex justify-center items-center w-screen h-screen">
			<Loader />
		</SafeAreaView>
  )
}
