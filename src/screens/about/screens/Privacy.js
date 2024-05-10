import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

import Header from '../../../components/header/Header';

const Privacy = () => {
    return (
        <ScrollView>
            <Header title={'PRIVACY PPLICY'} onBackPress={() => router.replace('about')}></Header>
            <Text style={PrivacyStyle.paragraph} >
                We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”). This Policy describes the types of information we may collect from you or that you may provide (“Personal Information”) on the rayashop.com website (“Website”), “Raya Shop” mobile application (“Mobile Application”), and any of their related products and services (collectively, “Services”), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                This Policy is a legally binding agreement between you (“User”, “you” or “your”) and this Website operator and Mobile Application developer (“Operator”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Services. By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
            </Text>
            
            <Text style={PrivacyStyle.h}>
                Collection of personal information
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                You can access and use the Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the features offered on the Services, you may be asked to provide certain Personal Information (for example, your name and e-mail address).{'\n'}

                We receive and store any information you knowingly provide to us when you create an account, publish content, or fill any forms on the Services. When required, this information may include the following:
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                - Account details (such as user name, unique user ID, password, etc){'\n'}
                - Contact information (such as email address, phone number, etc){'\n'}
                - Basic personal information (such as name, country of residence, etc){'\n'}
                - Any other materials you willingly submit to us (such as articles, images, feedback, etc)
            </Text>
            <Text style={PrivacyStyle.h}>
                Privacy of children
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Services, please contact us to request that we delete that child’s Personal Information from our Services.
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Services without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission.
            </Text>
            <Text style={PrivacyStyle.h}>
                Use and processing of collected information
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                We act as a data controller and a data processor when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor.
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                Our role may also differ depending on the specific situation involving Personal Information. We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Services. In such instances, we are a data controller because we determine the purposes and means of the processing of Personal Information.
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                In order to make the Services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Any of the information we collect from you may be used for the following purposes:
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                - Create and manage user accounts{'\n'}
                - Send product and service updates{'\n'}
                - Respond to inquiries and offer support{'\n'}
                - Request user feedback{'\n'}
                - Respond to legal requests and prevent harm{'\n'}
                - Run and operate the Services{'\n'}
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                Processing your Personal Information depends on how you interact with the Services, where you are located in the world and if one of the following applies: (i) you have given your consent for one or more specific purposes; (ii) provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (iii) processing is necessary for compliance with a legal obligation to which you are subject; (iv) processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                Note that under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other of the legal bases. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
            </Text>
            <Text style={PrivacyStyle.h}>
                Managing information
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Services change. When you delete Personal Information, however, we may maintain a copy of the unrevised Personal Information in our records for the duration necessary to comply with our obligations to our affiliates and partners, and for the purposes described below. If you would like to delete your Personal Information or permanently delete your account, you can do so by contacting us.
            </Text>
            <Text style={PrivacyStyle.h}>
                Disclosure of information
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our affiliates, contracted companies, and service providers (collectively, “Service Providers”) we rely upon to assist in the operation of the Services available to you and whose privacy policies are consistent with ours or who agree to abide by our policies with respect to Personal Information. We will not share any personally identifiable information with third parties and will not share any information with unaffiliated third parties.
            </Text>
            <Text style={PrivacyStyle.paragraph}>
                Service Providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements. Service Providers are given the information they need only in order to perform their designated functions, and we do not authorize them to use or disclose any of the provided information for their own marketing or other purposes.
            </Text>
        </ScrollView>
    )
}

export default Privacy;

const PrivacyStyle = StyleSheet.create({
    paragraph: {
        paddingHorizontal: '6%',
        paddingVertical: 10
    },
    h: {
        paddingHorizontal: '6%',
        paddingVertical: 10,
        fontWeight: '700',
    }
})