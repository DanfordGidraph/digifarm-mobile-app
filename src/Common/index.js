import { NativeModules } from 'react-native'
import * as _Analytics from './Analytics'
import _Colors from './Colors'
import _Configs from './Configs'
import _Constants from './Constants'
import _Images from './Images'
import _Languages from './Languages'
import _Data from './Data'
import * as _Utils from './Utils'

export const { DeviceLockController, RNDeviceUtils } = NativeModules
export const Analytics = _Analytics
export const Colors = _Colors
export const Configs = _Configs
export const Constants = _Constants
export const Images = _Images
export const Languages = _Languages
export const Data = _Data
export const Utils = _Utils
