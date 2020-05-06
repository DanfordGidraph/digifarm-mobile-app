import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  btn_next: {
    alignSelf: 'center',
    borderRadius: 10,
    height: height * 0.075,
    marginVertical: height * 0.01,
    width: width * 0.6,
  },
  btn_upload: {
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    height: height * 0.075,
    marginVertical: height * 0.01,
    width: width * 0.6,
  },
  container: {
    backgroundColor: Colors.BackgroundColor,
  },
  content: {
    backgroundColor: Colors.TransWhite,
    minHeight: height * 0.85,
  },
  form: {
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.02,
    width: width * 0.95,
  },
  icon_step_circle: {
    color: props?.pending ? Colors.Gray : Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(55),
  },
  img_bg: {
    height,
    position: 'absolute',
    width,
  },
  txt_attachments: {
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(20),
    fontStyle: 'italic',
    fontWeight: '500',
    marginVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
  },
  txt_btn: {
    fontSize: Utils.scaledSize(20),
  },
  txt_desc: {
    alignSelf: 'center',
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(17),
    fontWeight: '500',
    marginVertical: height * 0.01,
    textAlign: 'justify',
    width: width * 0.85,
  },
  txt_doc_item_bullet: {
    alignSelf: 'center',
    color: Colors.DarkGray,
    fontSize: Utils.scaledSize(17),
    fontWeight: '700',
    width: width * 0.9,
  },
  txt_doc_item_text: {
    alignSelf: 'center',
    color: Colors.DarkGray,
    fontSize: Utils.scaledSize(14),
    fontWeight: '200',
  },
  txt_doc_name: {
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(15),
    fontStyle: 'italic',
    fontWeight: '500',
  },
  txt_header: {
    alignSelf: 'center',
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(20),
    fontStyle: 'italic',
    fontWeight: '500',
    marginVertical: height * 0.01,
  },
  txt_login: {
    alignSelf: 'center',
    color: Colors.White,
    fontSize: Utils.scaledSize(23),
  },
  txt_step_name: {
    alignSelf: 'center',
    color: props?.pending ? Colors.Gray : Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(13),
    fontWeight: '500',
    textAlign: 'center',
    width: width * 0.24,
  },
  txt_upload_btn: {
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(20),
    fontWeight: '700',
  },
  view_doc_entry: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    flexDirection: 'row',
    height: height * 0.05,
    justifyContent: 'space-between',
    marginVertical: width * 0.01,
    paddingHorizontal: width * 0.02,
    width: width * 0.9,
  },
  view_progress: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 0.95,
  },
  view_progress_dash_left: {
    borderBottomColor: Colors.SafaricomGreen,
    borderBottomWidth: 2,
    left: width * 0.2,
    position: 'absolute',
    top: height * 0.04,
    width: width * 0.25,
  },
  view_progress_dash_right: {
    borderBottomColor: Colors.Gray,
    borderBottomWidth: 2,
    position: 'absolute',
    right: width * 0.2,
    top: height * 0.04,
    width: width * 0.25,
  },
  view_progress_item: {
    alignItems: 'center',
    height: width * 0.25,
    justifyContent: 'space-evenly',
    width: width * 0.35,
  },
})

export default styles
