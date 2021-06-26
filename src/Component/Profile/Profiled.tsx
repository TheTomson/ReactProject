import React, { FC, useState, ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUsers } from "../../redux/Actions/userActions";
import { IState } from "../../redux/Reducers/rootReducer";
import { IUserReducer } from "../../redux/Reducers/userReducer";
import { fetchPhoto } from "../../redux/Actions/photoActions";
import { IPhotoReducer } from "../../redux/Reducers/photoReducer";
import { loggUserID } from "../../StyleHelpers/CurrentLogUser";

const Wrapper5 = styled.div`
  width: 77%;
  margin-left: 18%;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #edf2f7;
  position: relative;
  z-index: 3;
`;
const ButtonPanels = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonInPanel = styled.button`
  border: none;
  background: none;
  margin-left: 20px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const CancelButton = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 20px;
`;
const TopProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 582px;
  border: 1px solid;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.3);
`;
const TopProfileInformationInternal = styled.div`
  position: relative;
  left: 45px;
`;
const TopProfileImg = styled.img`
  height: 30px;
  width: 30px;
  position: relative;
  right: 40px;
  top: 25px;
  border-radius: 50%;
`;
const TopNameProfile = styled.p``;
const TopDescriptionProfile = styled.p``;
const TownProfile = styled.p``;
const RoleProfile = styled.p``;
const MailProfile = styled.p`
  position: relative;
  left: 104%;
  bottom: 30px;
  font-size: 16px;
`;
const TelephoneProfile = styled.p`
  position: relative;
  left: 104%;
  bottom: 30px;
  font-size: 16px;
`;
const EditingInput = styled.input`
  display: block;
`;
const TopEditProfile = styled.img`
  height: 15px;
  width: 15px;
  position: relative;
  left: 275px;
  bottom: 95px;
`;
const OtherProfile = styled.div`
  border: 1px solid;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.3);
`;
const OtherEditProfile = styled.img`
  height: 15px;
  width: 15px;
  position: relative;
  left: 314px;
  top: 10px;
`;
const OtherProfileInformation = styled.h4`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const OtherProfileInformationParagraf = styled.p`
  font-size: 16px;
  font-weight: bold;
  border: 1px solid;
  border-radius: 5%;
  background-color: #afeeee;
  width: 100px;
  display: inline;
  line-height: 15px;
  margin-left: 15px;
  position: relative;
  right: 15px;
`;
const PanelInformationText = styled.span`
  font-size: 22px;
  font-weight: bold;
  display: block;
  margin-top: 5px;
`;
const DivInternalCor = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonInternalCor = styled.button`
  border: none;
  background: none;
  margin-left: 20px;
  opacity: 0.7;
  position: relative;
  left: 400px;
  bottom: 15px;
  &:hover {
    opacity: 1;
  }
`;
const ParagrafInOPI = styled.p``;
const ParagrafInOPI2 = styled.p`
  position: relative;
  left: 35px;
`;
const Table = styled.table`
  border: 1px solid;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.3);
`;
const TableNames = styled.th`
  width: 80px;
`;
const TableField = styled.td`
  width: 90px;
`;
const SeeMoreProp = styled.span`
  color: blue;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  left: 445px;
  white-space: nowrap;
`;
const CorrespondantsIMG = styled.img`
  height: 25px;
  width: 25px;
  position: relative;
  border-radius: 50%;
  top: 22px;
`;
type fetchUsers = ReturnType<typeof fetchUsers>;
type fetchUser = ReturnType<typeof fetchUser>;
type fetchPhoto = ReturnType<typeof fetchPhoto>;

export const Profiled: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<fetchUsers>(fetchUsers());
  }, []);
  useEffect(() => {
    dispatch<fetchUser>(fetchUser(loggUserID.toString()));
  }, []);
  useEffect(() => {
    dispatch<fetchPhoto>(fetchPhoto());
  }, []);
  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));
  const photos = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photo,
  }));
  const photoCurrentLogg = photos.photo[loggUserID - 1];
  const user = users.users[1];
  const userid = user?.id;
  const photo = photos.photo[userid - 1];

  const [isEdting, setIsEditing] = useState<boolean>(false);
  const [isEdting2, setIsEditing2] = useState<boolean>(false);
  const [name, setInputName] = useState<string>(`${users.user?.name}`);
  const inputName = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputName(text);
  };
  const [description, setInpuTableFieldescription] = useState<string>(
    `${users.user?.company?.name}`
  );
  const [town, setInputTown] = useState<string>(`${users.user?.address?.city}`);
  const inputTown = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputTown(text);
  };
  const [role, setInputRole] = useState<string>(`${users.user?.company?.bs}`);
  const inputRole = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputRole(text);
  };
  const [mail, setInputMail] = useState<string>(`${users.user?.email}`);
  const inputMail = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputMail(text);
  };
  const [telephone, setInputTelephone] = useState<string>(
    `${users.user?.phone}`
  );
  const inputTelephone = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputTelephone(text);
  };
  const [expertise, setInputExpertise] = useState<string>(
    "Merges and acquisition"
  );
  const inputExpertise = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputExpertise(text);
  };
  const [specialties, setInputSpecialties] = useState<string>(
    "Cross border operation"
  );
  const inputSpecialties = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputSpecialties(text);
  };
  const [specialties2, setInputSpecialties2] = useState<string>(
    "Transaction over 500M€/$"
  );
  const inputSpecialties2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputSpecialties2(text);
  };
  const [admission, setInputAdmission] = useState<string>(
    "Paris bar association"
  );
  const inputAdmission = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputAdmission(text);
  };
  const [admission2, setInputAdmission2] = useState<string>(
    "Tunisian bar association"
  );
  const inputAdmission2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputAdmission2(text);
  };
  const [counties, setInputCounties] = useState<string>("Tunisia");
  const inputCounties = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputCounties(text);
  };
  const [hourlyFee, setInputHourlyFee] = useState<string>("610€/hour");
  const inputHourlyFee = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputHourlyFee(text);
  };
  const [termsAndCondition, setInputTermsAndCondition] = useState<string>(
    "Monthly 10k€ retainer - see with Jeanny Smith"
  );
  const InputTermsAndCondition = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputTermsAndCondition(text);
  };
  const [serviceAndProjects, setInputserviceAndProjects] = useState<string>(
    "Corporate M&A and international acquisitions"
  );
  const InputServiceAndProjects = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputserviceAndProjects(text);
  };
  const [internalCorrespondants, setInputinternalCorrespondants] =
    useState<string>(user?.name);
  const InputInternalCorrespondants = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputinternalCorrespondants(text);
  };
  const [internalCorrespondants2, setInputinternalCorrespondants2] =
    useState<string>(user?.name);
  const InputInternalCorrespondants2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputinternalCorrespondants2(text);
  };
  // Propsals Table
  const inpuTableFieldescription = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInpuTableFieldescription(text);
  };
  const [t1c1w1, setInputt1c1w1] = useState<string>("Operation Ti..");
  const Inputt1c1w1 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c1w1(text);
  };
  const [t1c2w1, setInputt1c2w1] = useState<string>("Renault Co..");
  const Inputt1c2w1 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c2w1(text);
  };
  const [t1c3w1, setInputt1c3w1] = useState<string>("France");
  const Inputt1c3w1 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c3w1(text);
  };
  const [t1c4w1, setInputt1c4w1] = useState<string>("#Tax");
  const Inputt1c4w1 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c4w1(text);
  };
  const [t1c5w1, setInputt1c5w1] = useState<string>("20/01/2018");
  const Inputt1c5w1 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c5w1(text);
  };
  const [t1c6w1, setInputt1c6w1] = useState<string>("Racine");
  const Inputt1c6w1 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c6w1(text);
  };
  const [t1c1w2, setInputt1c1w2] = useState<string>("Op. Prometh..");
  const Inputt1c1w2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c1w2(text);
  };
  const [t1c2w2, setInputt1c2w2] = useState<string>("Renault HQ");
  const Inputt1c2w2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c2w2(text);
  };
  const [t1c3w2, setInputt1c3w2] = useState<string>("USA");
  const Inputt1c3w2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c3w2(text);
  };
  const [t1c4w2, setInputt1c4w2] = useState<string>("#M&A");
  const Inputt1c4w2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c4w2(text);
  };
  const [t1c5w2, setInputt1c5w2] = useState<string>("18/02/2019");
  const Inputt1c5w2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c5w2(text);
  };
  const [t1c6w2, setInputt1c6w2] = useState<string>("Cliford chance");
  const Inputt1c6w2 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c6w2(text);
  };
  const [t1c1w3, setInputt1c1w3] = useState<string>("Op. Latandre");
  const Inputt1c1w3 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c1w3(text);
  };
  const [t1c2w3, setInputt1c2w3] = useState<string>("Renault Br..");
  const Inputt1c2w3 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c2w3(text);
  };
  const [t1c3w3, setInputt1c3w3] = useState<string>("Italia");
  const Inputt1c3w3 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c3w3(text);
  };
  const [t1c4w3, setInputt1c4w3] = useState<string>("#Social");
  const Inputt1c4w3 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c4w3(text);
  };
  const [t1c5w3, setInputt1c5w3] = useState<string>("18/02/2019");
  const Inputt1c5w3 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c5w3(text);
  };
  const [t1c6w3, setInputt1c6w3] = useState<string>("SVZ");
  const Inputt1c6w3 = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputt1c6w3(text);
  };

  const handleClick = () => {
    setIsEditing(!isEdting);
  };
  const handleClick2 = () => {
    setIsEditing2(!isEdting2);
  };

  return (
    <Wrapper5>
      <ButtonPanels>
        <ButtonInPanel>Message</ButtonInPanel>
        <ButtonInPanel>Create a request</ButtonInPanel>
        <ButtonInPanel>Add to a cluster</ButtonInPanel>
        <CancelButton src="./Media/remove.svg"></CancelButton>
      </ButtonPanels>
      <TopProfileInformation>
        <TopProfileInformationInternal>
          <TopProfileImg src={photoCurrentLogg?.url}></TopProfileImg>
          {isEdting ? (
            <EditingInput value={name} onChange={inputName}></EditingInput>
          ) : (
            <TopNameProfile>{name}</TopNameProfile>
          )}
          {isEdting ? (
            <EditingInput
              value={description}
              onChange={inpuTableFieldescription}
            ></EditingInput>
          ) : (
            <TopDescriptionProfile>{description}</TopDescriptionProfile>
          )}
          {isEdting ? (
            <EditingInput value={town} onChange={inputTown}></EditingInput>
          ) : (
            <TownProfile>{town}</TownProfile>
          )}
          {isEdting ? (
            <EditingInput value={role} onChange={inputRole}></EditingInput>
          ) : (
            <RoleProfile>{role}</RoleProfile>
          )}
          {isEdting ? (
            <EditingInput value={mail} onChange={inputMail}></EditingInput>
          ) : (
            <MailProfile>{mail}</MailProfile>
          )}
          {isEdting ? (
            <EditingInput
              value={telephone}
              onChange={inputTelephone}
            ></EditingInput>
          ) : (
            <TelephoneProfile>{telephone}</TelephoneProfile>
          )}
          <TopEditProfile
            src="./Media/pencil.svg"
            onClick={(e) => handleClick()}
          ></TopEditProfile>
        </TopProfileInformationInternal>
      </TopProfileInformation>
      <OtherProfile>
        <OtherEditProfile
          src="./Media/pencil.svg"
          onClick={(e) => handleClick2()}
        ></OtherEditProfile>
        <OtherProfileInformation>Expertise</OtherProfileInformation>

        {isEdting2 ? (
          <EditingInput
            value={expertise}
            onChange={inputExpertise}
          ></EditingInput>
        ) : (
          <OtherProfileInformationParagraf>
            {expertise}
          </OtherProfileInformationParagraf>
        )}
        <OtherProfileInformation>Specialities</OtherProfileInformation>
        {isEdting2 ? (
          <EditingInput
            value={specialties}
            onChange={inputSpecialties}
          ></EditingInput>
        ) : (
          <OtherProfileInformationParagraf>
            {specialties}
          </OtherProfileInformationParagraf>
        )}
        {isEdting2 ? (
          <EditingInput
            value={specialties2}
            onChange={inputSpecialties2}
          ></EditingInput>
        ) : (
          <OtherProfileInformationParagraf>
            {specialties2}
          </OtherProfileInformationParagraf>
        )}
        <OtherProfileInformation>
          Admission to practice law
        </OtherProfileInformation>
        {isEdting2 ? (
          <EditingInput
            value={admission}
            onChange={inputAdmission}
          ></EditingInput>
        ) : (
          <OtherProfileInformationParagraf>
            {admission}
          </OtherProfileInformationParagraf>
        )}
        {isEdting2 ? (
          <EditingInput
            value={admission2}
            onChange={inputAdmission2}
          ></EditingInput>
        ) : (
          <OtherProfileInformationParagraf>
            {admission2}
          </OtherProfileInformationParagraf>
        )}
        <OtherProfileInformation>Counties</OtherProfileInformation>
        {isEdting2 ? (
          <EditingInput
            value={counties}
            onChange={inputCounties}
          ></EditingInput>
        ) : (
          <OtherProfileInformationParagraf>
            {counties}
          </OtherProfileInformationParagraf>
        )}
        <PanelInformationText>Panel informations</PanelInformationText>
        <OtherProfileInformation>Hourly fee</OtherProfileInformation>
        {isEdting2 ? (
          <EditingInput
            value={hourlyFee}
            onChange={inputHourlyFee}
          ></EditingInput>
        ) : (
          <ParagrafInOPI>{hourlyFee}</ParagrafInOPI>
        )}
        <OtherProfileInformation>Terms and Conditions</OtherProfileInformation>
        {isEdting2 ? (
          <EditingInput
            value={termsAndCondition}
            onChange={InputTermsAndCondition}
          ></EditingInput>
        ) : (
          <ParagrafInOPI>{termsAndCondition}</ParagrafInOPI>
        )}
        {isEdting2 ? <EditingInput type="file"></EditingInput> : ""}
        <OtherProfileInformation>Services and Projects</OtherProfileInformation>
        {isEdting2 ? (
          <EditingInput
            value={serviceAndProjects}
            onChange={InputServiceAndProjects}
          ></EditingInput>
        ) : (
          <ParagrafInOPI>{serviceAndProjects}</ParagrafInOPI>
        )}
        <OtherProfileInformation>
          Internal corespondatns
        </OtherProfileInformation>
        <CorrespondantsIMG src={photo?.url}></CorrespondantsIMG>
        {isEdting2 ? (
          <EditingInput
            value={internalCorrespondants}
            onChange={InputInternalCorrespondants}
          ></EditingInput>
        ) : (
          <ParagrafInOPI2>{internalCorrespondants}</ParagrafInOPI2>
        )}
        <DivInternalCor>
          <ButtonInternalCor>Message</ButtonInternalCor>
          <ButtonInternalCor>Profile</ButtonInternalCor>
        </DivInternalCor>
        <CorrespondantsIMG src={photo?.url}></CorrespondantsIMG>
        {isEdting2 ? (
          <EditingInput
            value={internalCorrespondants2}
            onChange={InputInternalCorrespondants2}
          ></EditingInput>
        ) : (
          <ParagrafInOPI2>{internalCorrespondants2}</ParagrafInOPI2>
        )}
        <ButtonInternalCor>Message</ButtonInternalCor>
        <ButtonInternalCor>Profile</ButtonInternalCor>
        <OtherProfileInformation>Proposals</OtherProfileInformation>
        <Table>
          <TableNames>Name</TableNames>
          <TableNames>Entity</TableNames>
          <TableNames>Location</TableNames>
          <TableNames>Expertise</TableNames>
          <TableNames>Date</TableNames>
          <TableNames>Firm</TableNames>
          <tr>
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c1w1}
                  onChange={Inputt1c1w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c1w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c2w1}
                  onChange={Inputt1c2w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c2w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c3w1}
                  onChange={Inputt1c3w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c3w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c4w1}
                  onChange={Inputt1c4w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c4w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c5w1}
                  onChange={Inputt1c5w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c5w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c6w1}
                  onChange={Inputt1c6w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c6w1}</TableField>
            )}
          </tr>
          <tr>
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c1w2}
                  onChange={Inputt1c1w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c1w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c2w2}
                  onChange={Inputt1c2w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c2w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c3w2}
                  onChange={Inputt1c3w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c3w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c4w2}
                  onChange={Inputt1c4w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c4w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c5w2}
                  onChange={Inputt1c5w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c5w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c6w2}
                  onChange={Inputt1c6w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c6w2}</TableField>
            )}
          </tr>
          <tr>
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c1w3}
                  onChange={Inputt1c1w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c1w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c2w3}
                  onChange={Inputt1c2w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c2w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c3w3}
                  onChange={Inputt1c3w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c3w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c4w3}
                  onChange={Inputt1c4w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c4w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c5w3}
                  onChange={Inputt1c5w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c5w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c6w3}
                  onChange={Inputt1c6w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c6w3}</TableField>
            )}
          </tr>
          <SeeMoreProp>See More Proposal</SeeMoreProp>
        </Table>
        <OtherProfileInformation>Internal reviews</OtherProfileInformation>
        <Table>
          <TableNames>Name</TableNames>
          <TableNames>Entity</TableNames>
          <TableNames>Location</TableNames>
          <TableNames>Expertise</TableNames>
          <TableNames>Date</TableNames>
          <tr>
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c1w1}
                  onChange={Inputt1c1w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c1w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c2w1}
                  onChange={Inputt1c2w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c2w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c3w1}
                  onChange={Inputt1c3w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c3w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c4w1}
                  onChange={Inputt1c4w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c4w1}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c5w1}
                  onChange={Inputt1c5w1}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c5w1}</TableField>
            )}
          </tr>
          <tr>
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c1w2}
                  onChange={Inputt1c1w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c1w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c2w2}
                  onChange={Inputt1c2w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c2w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c3w2}
                  onChange={Inputt1c3w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c3w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c4w2}
                  onChange={Inputt1c4w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c4w2}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c5w2}
                  onChange={Inputt1c5w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c5w2}</TableField>
            )}
          </tr>
          <tr>
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c1w3}
                  onChange={Inputt1c1w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c1w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c2w3}
                  onChange={Inputt1c2w2}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c2w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c3w3}
                  onChange={Inputt1c3w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c3w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c4w3}
                  onChange={Inputt1c4w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c4w3}</TableField>
            )}
            {isEdting2 ? (
              <TableField>
                <EditingInput
                  value={t1c5w3}
                  onChange={Inputt1c5w3}
                ></EditingInput>
              </TableField>
            ) : (
              <TableField>{t1c5w3}</TableField>
            )}
          </tr>
        </Table>
        <OtherProfileInformation>Amount of fees</OtherProfileInformation>
      </OtherProfile>
    </Wrapper5>
  );
};
