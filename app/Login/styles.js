
import React, {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F3F3F4',
    }
    , topNavBar: {
        height: 70,
        backgroundColor: '#FFFFFF'
    }
    , navBarText: {
        color: '#F06238',
        fontSize: 25
    }
    , navBarTextContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
    , navbBackbtn: {
        height: 30,
        width: 30
    }
    , navLockIcon: {
        height: 35,
        width: 35,
        marginLeft: 10
    }
    , loginContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
    }
    , inputContainer: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 8,

    }
    , inputText: {
        width: 350,
        height: 50,
        paddingLeft: 50
    }
    , btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF552E',
        width: 350,
        height: 50,
        marginTop: 30,
        borderRadius: 8,
    },
    btnClicked: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC4B8',
        width: 350,
        height: 50,
        marginTop: 30,
        borderRadius: 8,
    }
    , btnText: {
        fontSize: 20,
        color: "#FFFFFF"
    }
    , textInputIcon: {
        position: 'absolute',
        height: 40,
        width: 40,
        marginTop: 20
    }
    , userIcon: {
        position: 'absolute',
        height: 35,
        width: 35,
        marginTop: 20,
        marginLeft: 5
    }

});

