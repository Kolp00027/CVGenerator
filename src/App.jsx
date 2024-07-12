import React from "react";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profil, setProfil] = useState("");
  const [annee, setAnnee] = useState("");
  const [nivetude, setNivEtude] = useState("");
  const [diplome, setDiplome] = useState("");
  const [competence, setCompetence] = useState("");
  const [loisir, setLoisir] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [post, setPost] = useState("");
  const [date, setDate] = useState("");

  const [personalInfoValidated, setPersonalInfoValidated] = useState(false);
  const [profilValidated, setProfilValidated] = useState(false);
  const [diplomeValidated, setDiplomeValidated] = useState(false);
  const [experienceValidated, setExperienceValidated] = useState(false);
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setPersonalInfoValidated(false);
  }
  function handleemailChange(e) {
    setEmail(e.target.value);
    setPersonalInfoValidated(false);
  }
  function handlephoneNumberChange(e) {
    setPhoneNumber(e.target.value);
    setPersonalInfoValidated(false);
  }
  function handleprofilChange(e) {
    setProfil(e.target.value);
    setProfilValidated(false);
  }
  function handlePersonalInfoValidate(e) {
    e.preventDefault();
    setPersonalInfoValidated(true);
  }
  function handlePersonalInfoReset() {
    setFirstName("");
    setEmail("");
    setPhoneNumber("");
    setPersonalInfoValidated(false);
  }
  function handleProfilValidate(e) {
    e.preventDefault();
    setProfilValidated(true);
  }
  function handleProfilReset() {
    setProfil("");
    setProfilValidated(false);
  }

  function handleEntrepriseChange(e) {
    setEntreprise(e.target.value);
    setExperienceValidated(false);
  }
  function handlepostChange(e) {
    setPost(e.target.value);
    setExperienceValidated(false);
  }
  function handledateChange(e) {
    setDate(e.target.value);
    setExperienceValidated(false);
  }
  function handleexperienceValidated(e) {
    e.preventDefault();
    setExperienceValidated(true);
  }
  function handleexperienceReset(e) {
    setEntreprise("");
    setPost("");
    setDate("");
    setExperienceValidated(false);
  }

  function handleanneeChange(e) {
    setAnnee(e.target.value);
    setDiplomeValidated(false);
  }
  function handlenivetudeChange(e) {
    setNivEtude(e.target.value);
    setDiplomeValidated(false);
  }
  function handlediplomeChange(e) {
    setDiplome(e.target.value);
    setDiplomeValidated(false);
  }
  function handlecompetenceChange(e) {
    setCompetence(e.target.value);
    setDiplomeValidated(false);
  }
  function handleloisirChange(e) {
    setLoisir(e.target.value);
    setDiplomeValidated(false);
  }
  function handleDiplomeValidated(e) {
    e.preventDefault();
    setDiplomeValidated(true);
  }
  function handleDiplomeInfoReset(e) {
    setAnnee("");
    setNivEtude("");
    setDiplome("");
    setCompetence("");
    setLoisir("");
    setDiplomeValidated(false);
  }

  return (
    <div className="flex flex-row justify-between mx-2 pr-2 w-full">
      <div className="w-max">
        <div className=" flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 h-max w-full ">
          <h1 className="bg-red-500 p-1 rounded border-none text-white mb-2 font-extralight">
            Informations personnelles
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Nom et Prenoms :
            </label>
            <input
              type="text"
              placeholder="Entrez Votre Nom"
              name="firstname"
              className="bg-white border-solid border-2 border-black rounded"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              E-mail :
            </label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre Email"
              className="bg-white border-solid border-2 border-black rounded"
              value={email}
              onChange={handleemailChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold ">
              Numéro de téléphone :
            </label>
            <input
              type="number"
              name="number"
              placeholder="Entrez votre numero"
              className="bg-white border-solid border-2 border-black mb-5 rounded"
              value={phoneNumber}
              onChange={handlephoneNumberChange}
            />
          </form>
          <button
            onClick={handlePersonalInfoValidate}
            type="submit"
            className="bg-cyan-600 text-white rounded w-1/4 cursor-pointer mb-3">
            Valider
          </button>
          <button
            onClick={handlePersonalInfoReset}
            type="submit"
            className="bg-cyan-600 text-white rounded w-1/4 cursor-pointer">
            Réinitialiser
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 h-max w-full ">
          <h1 className="bg-red-500 p-4 rounded border-none text-white mb-2 font-extralight">
            Profil
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold ">
              Profil du candidant :
            </label>
            <textarea
              id="msg"
              name="user_message"
              className="mb-5"
              value={profil}
              onChange={handleprofilChange}></textarea>
          </form>
          <button
            onClick={handleProfilValidate}
            type="submit"
            className="bg-cyan-600 text-white rounded w-1/4 cursor-pointer mb-3">
            Valider
          </button>
          <button
            onClick={handleProfilReset}
            type="submit"
            className="bg-cyan-600 text-white rounded w-1/4 cursor-pointer">
            Réinitialiser
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 h-max w-full ">
          <h1 className="bg-red-500 p-2 rounded border-none text-white mb-2 font-extralight text-center">
            Diplomes
            <br />&<br />
            Formations
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Annee :
            </label>
            <input
              type="text"
              placeholder="Niveau d'etude"
              name="annee"
              className="bg-white border-solid border-2 border-black rounded"
              value={annee}
              onChange={handleanneeChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Niveau d'etude :
            </label>
            <input
              type="text"
              placeholder="Niveau d'etude"
              name="nivetude"
              className="bg-white border-solid border-2 border-black rounded"
              value={nivetude}
              onChange={handlenivetudeChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full ">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Diplome :
            </label>
            <input
              type="email"
              name="Diplome"
              placeholder="Diplome"
              className="bg-white border-solid border-2 border-black rounded"
              value={diplome}
              onChange={handlediplomeChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Compétences :
            </label>
            <input
              type="text"
              placeholder="Compétences"
              name="competence"
              className="bg-white border-solid border-2 border-black rounded"
              value={competence}
              onChange={handlecompetenceChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Loisirs :
            </label>
            <input
              type="text"
              placeholder="Loisirs"
              name="loisir"
              className="bg-white border-solid border-2 border-black rounded"
              value={loisir}
              onChange={handleloisirChange}
            />
          </form>
          <button
            onClick={handleDiplomeValidated}
            type="submit"
            className="bg-cyan-600 mt-4 text-white rounded w-1/4 cursor-pointer mb-3">
            Valider
          </button>
          <button
            onClick={handleDiplomeInfoReset}
            type="submit"
            className="bg-cyan-600 mt-4 text-white rounded w-1/4 cursor-pointer">
            Réinitialiser
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 h-max w-full ">
          <h1 className="bg-red-500 p-1 rounded border-none text-white mb-2 font-extralight">
            Expériences professionnelles
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Nom de l'entreprise :
            </label>
            <input
              type="text"
              placeholder="Entrez le nom de l'entreprise"
              name="text"
              className="bg-white border-solid border-2 border-black rounded"
              value={entreprise}
              onChange={handleEntrepriseChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold">
              Titre du poste :
            </label>
            <input
              type="texte"
              name="texte"
              placeholder="Entrez le titre du poste"
              className="bg-white border-solid border-2 border-black rounded"
              value={post}
              onChange={handlepostChange}
            />
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full">
            <label htmlFor="" className="pr-2 text-white font-semibold ">
              Date à partir de laquelle et jusqu'à laquelle vous avez travaillé
              pour cette entreprise :
            </label>
            <input
              type="name"
              name="firstname"
              placeholder="Entrez votre date de travaillé"
              className="bg-white border-solid border-2 border-black mb-5 rounded"
              value={date}
              onChange={handledateChange}
            />
          </form>
          <button
            onClick={handleexperienceValidated}
            type="submit"
            className="bg-cyan-600 text-white rounded w-1/4 cursor-pointer mb-3">
            Valider
          </button>
          <button
            onClick={handleexperienceReset}
            type="submit"
            className="bg-cyan-600 text-white rounded w-1/4 cursor-pointer ">
            Réinitialiser
          </button>
        </div>
      </div>
      <div className="w-full ml-5">
        <div className="flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 w-full h-max">
          <h1 className="font-sans text-5xl  w-full pb-5 text-center mb-5 text-neutral-700 font-bold">
            Curriculum vital
          </h1>
          <div className="flex justify-around  mb-5 w-full">
            <div className="flex items-center font-semibold text-white ">
              {personalInfoValidated && <h1> Nom : {firstName}</h1>}
            </div>
            <div className="flex items-center font-semibold text-white">
              {personalInfoValidated && <h1> Email: {email}</h1>}
            </div>
            <div className="flex items-center font-semibold text-white ">
              {personalInfoValidated && (
                <h1>Numéro de téléphone : {phoneNumber} </h1>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 w-full h-max">
          <h1 className="font-sans text-5xl  w-full pb-5 text-center mb-5 text-neutral-700 font-bold">
            Profil
          </h1>
          <div className="flex justify-around  mb-5 w-full">
            <div className="flex items-center font-semibold text-white  ">
              {profilValidated && <h1> {profil}</h1>}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 w-full h-max">
          <h1 className="font-sans text-5xl  w-full pb-5 text-center mb-5 text-neutral-700 font-bold">
            Diplomes et Formations
          </h1>
          <div className="flex flex-col justify-around  mb-5 w-full">
            <div className="flex flex-col items-center font-semibold text-white ">
              {diplomeValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Année
                  </span>{" "}
                  : {annee}
                </h1>
              )}
            </div>
            <div className="flex flex-col items-center font-semibold text-white">
              {diplomeValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Niveau d'etude
                  </span>{" "}
                  : {nivetude}
                </h1>
              )}
            </div>
            <div className="flex flex-col items-center font-semibold text-white ">
              {diplomeValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Diplome
                  </span>{" "}
                  : {diplome}
                </h1>
              )}
            </div>
            <div className="flex flex-col items-center font-semibold text-white ">
              {diplomeValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Compétences
                  </span>{" "}
                  : {competence}
                </h1>
              )}
            </div>
            <div className="flex flex-col items-center font-semibold text-white ">
              {diplomeValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Loisirs
                  </span>{" "}
                  : {loisir}
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-5 mt-3 rounded-md bg-gray-400 border-none border-2 border-sky-500 w-full h-max">
          <h1 className="font-sans text-5xl  w-full pb-5 text-center mb-5 text-neutral-700 font-bold">
            Expériences professionnelles
          </h1>
          <div className="flex flex-col justify-around  mb-5 w-full">
            <div className="flex flex-col items-center font-semibold text-white">
              {experienceValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Nom de l'entreprise :
                  </span>{" "}
                  : {entreprise}
                </h1>
              )}
            </div>
            <div className="flex flex-col items-center font-semibold text-white ">
              {experienceValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Titre du poste :
                  </span>{" "}
                  : {post}
                </h1>
              )}
            </div>
            <div className="flex flex-col items-center font-semibold text-white ">
              {experienceValidated && (
                <h1>
                  <span className="text-lg text-red-600 font-semibold ">
                    Date à partir de laquelle et jusqu'à laquelle vous avez
                    travaillé pour cette entreprise :
                  </span>{" "}
                  : {date}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
