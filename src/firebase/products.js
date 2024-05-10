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

const productsRef = collection(db, 'products');

const getDocFunc = async ( Collection, Doc ) => {
    const docRef = doc(db, Collection, Doc);
    return (await getDoc(docRef)).data();
}

const updateDocFunc = async ( Collection, Doc, Update ) => {
    const documentRef = doc(db, Collection, Doc);
    await updateDoc(documentRef, Update);
}

const deleteDocFunc = async ( Collection, Doc ) => {
    const documentRef = doc(db, Collection, Doc);
    await deleteDoc(documentRef);
}

const addDocFunc = async ( coll, docData ) =>{
    const docRef = collection(db, coll);
    await addDoc(docRef, docData);
}

const setDocFunc = async( coll, docData, docId ) => {
    const docRef = doc(db, coll, docId);
    await setDoc(docRef, docData);
}

const getDocsFunc= async ( coll ) => {
    const collectionRef = collection(db, coll);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const docData = [];
    querySnapshot.forEach(
        (doc) => { docData.push(doc.data()) }
    );
    return docData;
}

const addProduct = async (docData) =>{
    const newDoc =await addDoc(productsRef, docData);
    await updateDoc(doc(productsRef, newDoc.id), {
        id: newDoc.id
    });
}

const  getProduct= async(id) =>{
    const q = query(productsRef,where("id","==",id));   
    const data = await getDocs(q);
    return {...data.docs[0].data() , id: data.docs[0].id};
}
const  getProductsByCategory= async(category) =>{
    const q = query(productsRef,where("category","==",category));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push( doc.data() );
    });
    return docs;
}

const getProductsBysubCategory= async(subcategory) =>{
    const q = query(productsRef,where("subcategory","==",subcategory));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push( doc.data() );
    });
    return docs;
}



export {getDocFunc,
        updateDocFunc,
        deleteDocFunc,
        setDocFunc,
        getDocsFunc,
        addDocFunc,
        addProduct,
        getProductsByCategory,
        getProductsBysubCategory,
        getProduct
    };