import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import IconIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Octicon from 'react-native-vector-icons/Octicons'
import _ from 'lodash'
import URL from 'url'

export function getIconByType(type) {
  let Icon
  switch (type) {
    case 'ant-design': {
      Icon = AntDesign
      break
    }
    case 'entypo': {
      Icon = Entypo
      break
    }
    case 'evil-icons': {
      Icon = EvilIcon
      break
    }
    case 'feather': {
      Icon = Feather
      break
    }
    case 'font-awesome': {
      Icon = FontAwesome
      break
    }
    case 'font-awesome5': {
      Icon = FontAwesome5
      break
    }
    case 'fontisto': {
      Icon = Fontisto
      break
    }
    case 'foundation': {
      Icon = Foundation
      break
    }
    case 'ionicons': {
      Icon = IconIcon
      break
    }
    case 'material-community': {
      Icon = MaterialCommunity
      break
    }
    case 'material-icons': {
      Icon = MaterialIcon
      break
    }
    case 'octicons': {
      Icon = Octicon
      break
    }

    default: {
      Icon2 = FontAwesome5
      break
    }
  }

  return Icon
}

export function getFileNameFromPath(path) {
  return path.split(/(\\|\/)/g).pop()
}

export function getFileNameFromURL(url) {
  const urlParse = URL.parse(url)
  const { pathname } = urlParse
  return getFileNameFromPath(pathname)
}

export function stringEquals(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

export function isEmptyOrSpaces(str) {
  if (str) {
    return str.match(/^ *$/) !== null;
  }
  return true;
}

export function getSimpleCountryList(addFlag) {
  const COUNTRIES_CODE = _.sortBy(require('world-countries'), ['name.common'], ['asc']);
  if (addFlag) {
    return COUNTRIES_CODE.map((item, index) => {
      return {
        id: index,
        name: item.name.common,
        nameWithFlag: `${item.flag} ${item.name.common}`,
        flag: item.flag,
        code: item.cca2,
        callingCode: item.callingCode ? item.callingCode[0] : null,
      }
    })
  } else {
    return COUNTRIES_CODE.map((item, index) => {
      return {
        id: index,
        name: item.name.common,
        code: item.cca2,
        callingCode: item.callingCode ? item.callingCode[0] : null,
      }
    })
  }
}