import { db } from './config';
import {
    doc,
    collection,
    getDoc,
    query,
    getDocs,
    where,
    orderBy,
    updateDoc,
    deleteDoc,
    addDoc,
    setDoc
} from 'firebase/firestore';

async function getDocFunc ( Collection, Doc ) {
    const docRef = doc(db, Collection, Doc);
    return (await getDoc(docRef)).data();
}

async function updateDocFunc ( Collection, Doc, Update ) {
    const documentRef = doc(db, Collection, Doc);
    await updateDoc(documentRef, Update);
}

async function deleteDocFunc ( Collection, Doc ) {
    const documentRef = doc(db, Collection, Doc);
    await deleteDoc(documentRef);
}

async function addProduct(docData){
    const productsRef = collection(db, 'products');
    const docRef = doc(productsRef);
    await setDoc(docRef, docData);
}

async function getProductsByCategory(category){
    const q = query(collection(db, 'products'),where("category","==",category));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push( doc.data() );
    });

    return docs;
}

async function getProductsBysubCategory(category){
    const q = query(collection(db, 'products'),where("subcategory","==",category));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push( doc.data() );
    });

    return docs;
}

async function addDocFunc ( coll, docData ) {
    const docRef = collection(db, coll);
    await addDoc(docRef, docData);
}

async function setDocFunc ( coll, docData, docId ) {
    const docRef = doc(db, coll, docId);
    await setDoc(docRef, docData);
}

async function getDocsFunc ( coll ) {
    const collectionRef = collection(db, coll);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const docData = [];
    querySnapshot.forEach(
        (doc) => { docData.push(doc.data()) }
    );
    return docData;
}

export { getDocFunc, updateDocFunc, deleteDocFunc, setDocFunc, getDocsFunc, addDocFunc, addProduct, getProductsByCategory ,getProductsBysubCategory};