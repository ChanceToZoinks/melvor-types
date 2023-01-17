declare function signInWithAppleCallback(response: any): void;
declare function signInWithGoogleCallback(response: any): void;
declare const __awaiter: Promise<any>;
declare class CloudManager {
  TITLE_ID: string;
  enableAccountCreation: boolean;
  enableMelvorCloudRegistration: boolean;
  enableSkipRegistration: boolean;
  maxSaveSlots: number;
  enableSignInWithApple: boolean;
  enableSignInWithGoogle: boolean;
  enableSignInWithMelvorCloud: boolean;
  enableMelvorCloudBypass: boolean;
  melvorCloudLoginURL: string;
  grandfatheredTimestamp: number;
  expansionRelease: number;
  accountCreated: string;
  isAuthenticated: boolean;
  canAccessTest: boolean;
  DEBUG: boolean;
  appleToken: string;
  googleToken: string;
  customID: string;
  JWT: string;
  disableSocialSignIn: boolean;
  accountInfo: {};
  playfabSaves: {};
  patreonAccessToken: string;
  patreonRefreshToken: string;
  entitlements: {
    fullGame: boolean;
    TotH: boolean;
  };
  formElements: {
    default: {
      title: HTMLElement;
      logo: HTMLElement;
    };
    signIn: {
      container: HTMLElement;
      submit: HTMLElement;
      username: HTMLElement;
      password: HTMLElement;
      error: HTMLElement;
      withSocialsTitle: HTMLElement;
    };
    register: {
      container: HTMLElement;
      submit: HTMLElement;
      username: HTMLElement;
      password: HTMLElement;
      confirmPassword: HTMLElement;
      email: HTMLElement;
      error: HTMLElement;
    };
    forgot: {
      container: HTMLElement;
      submit: HTMLElement;
      email: HTMLElement;
      error: HTMLElement;
    };
    characterSelect: {
      email: {
        input: HTMLElement;
        submit: HTMLElement;
        error: HTMLElement;
      };
      changePassword: {
        currentPassword: HTMLElement;
        newPassword: HTMLElement;
        confirmNewPassword: HTMLElement;
        submit: HTMLElement;
        error: HTMLElement;
      };
    };
    signInWithApple: {
      native: HTMLElement;
      browser: HTMLElement;
    };
    signInWithGoogle: {
      native: HTMLElement;
      browser: HTMLElement;
    };
    env: {
      container: HTMLElement;
      baseGame: HTMLElement;
      testServer: HTMLElement;
      desktopTest: HTMLElement;
      mobileTest: HTMLElement;
      patreonConnect: HTMLElement;
    };
    language: {
      container: HTMLElement;
    };
    debug: {
      container: HTMLElement;
      log: HTMLElement;
      status: HTMLElement;
      pageLoader: HTMLElement;
    };
  };
  formInnerHTML: {
    signIn: {
      submit: {
        original: string;
      };
    };
    register: {
      submit: {
        original: string;
      };
    };
    forgot: {
      submit: {
        original: string;
      };
    };
    changePassword: {
      submit: {
        original: string;
      };
    };
  };
  get inProgressSpinner(): string;
  get btnSubmitInnerHTML(): string;
  get btnPatreonConnectSpinner(): string;
  get isTest(): boolean;
  checkAuthentication(): any;
  get hasFullVersionEntitlement(): boolean;
  get hasTotHEntitlement(): boolean;
  onAuthPageLoad(): void;
  hidePageLoader(): void;
  showPageLoader(): void;
  hideAllContainers(): void;
  showEnvSelectionContainer(): void;
  hideEnvSelectionContainer(): void;
  hideSignInContainer(): void;
  showSignInContainer(): void;
  showRegisterContainer(): void;
  hideRegisterContainer(): void;
  showForgotContainer(): void;
  hideForgotContainer(): void;
  removeSignInWithApple(): void;
  removeSignInWithGoogle(): void;
  hideSignInWithSocialsTitle(): void;
  showSignInWithSocialsTitle(): void;
  showLanguageSelection(): void;
  getOldCloudTokens(): {
    selector: string;
    random_password: string;
    username: string;
  };
  hasOldCloudTokens(): boolean;
  initSilentSignIn(): any;
  performMelvorCloudConversion(): any;
  deleteOldTokenCookies(): void;
  continueSuccessfulMelvorCloudLogin(data: any): void;
  convertMelvorCloudViaPOST(
    selector: any,
    random_password: string,
    username: string
  ): Promise<any>;
  isNativeAppLoadedYet(): Promise<any>;
  finalizeSignIn(): any;
  getTokensFromLocalStorage(): void;
  removeJWTFromLocalStorage(): void;
  removeAppleTokenFromLocalStorage(): void;
  removeGoogleTokenFromLocalStorage(): void;
  getCookie(name: string): string;
  deleteCookie(name: string): void;
  handleSignInWithApple(token: string): void;
  handleSignInWithGoogle(token: string): void;
  storeAppleToken(token: string): void;
  storeGoogleToken(token: string): void;
  storeMelvorCloudToken(token: string): void;
  initSignIn(): void;
  initRegistration(): void;
  initForgotPassword(): void;
  initChangeEmail(): void;
  initChangePassword(): void;
  disableSignInForm(): void;
  enableSignInForm(): void;
  disableRegisterForm(): void;
  enableRegisterForm(): void;
  disableForgotForm(): void;
  enableForgotForm(): void;
  disableChangeEmailForm(): void;
  enableChangeEmailForm(): void;
  disableChangePasswordForm(): void;
  enableChangePasswordForm(): void;
  showSignInProgressSpinner(): void;
  hideSignInProgressSpinner(): void;
  showRegisterProgressSpinner(): void;
  hideRegisterProgressSpinner(): void;
  showForgotProgressSpinner(): void;
  hideForgotProgressSpinner(): void;
  showChangeEmailProgressSpinner(): void;
  hideChangeEmailProgressSpinner(): void;
  showChangePasswordProgressSpinner(): void;
  hideChangePasswordProgressSpinner(): void;
  createOnClickEvents(): void;
  createLoginToMelvorCloudEvents(): void;
  createRegisterToMelvorCloudEvents(): void;
  createForgortPasswordCloudEvents(): void;
  createChangeEmailCloudEvents(): void;
  performChanceEmail(): void;
  createChangePasswordCloudEvents(): void;
  createSignInWithAppleEvent(): void;
  createSignInWithGoogleEvent(): void;
  playfabAPI(endpoint: string, requestObject: any): Promise<any>;
  initPlayFabLogin(method: any): any;
  refreshPlayFabToken(method: any): any;
  loginWithCustomIDViaPlayFab(): Promise<any>;
  loginWithAppleViaPlayFab(): Promise<any>;
  linkAppleToPlayFab(): Promise<void>;
  loginWithGoogleViaPlayFab(): Promise<any>;
  linkGoogleToPlayFab(): Promise<void>;
  failSocialSignIn(): void;
  handleFailedSignIn(): void;
  handleSuccessfulSignIn(): any;
  refreshPlayFabSaves(): any;
  signInRedirect(): void;
  get isOnAuthPage(): boolean;
  accessDenied(): void;
  displaySignInError(msg: string): void;
  hideSignInError(): void;
  displayRegisterError(msg: string): void;
  hideRegisterError(): void;
  displayForgotError(msg: string): void;
  hideForgotError(): void;
  displayChangeEmailError(msg: string): void;
  hideChangeEmailError(): void;
  displayChangePasswordError(msg: string): void;
  hideChangePasswordError(): void;
  getAccountInfo(): Promise<any>;
  getSavesFromPlayFab(): Promise<any>;
  performRequireAccountUpdates(): any;
  getPlayFabSaveKeys(): string[];
  skipCloudAuthentication(): void;
  registrationDisabled(): void;
  skipDisabled(): void;
  initDebug(): void;
  log(message: string): void;
  setStatus(message: string): void;
  isLoginFormValid(): boolean;
  isChangeEmailFormValid(): boolean;
  isChangePasswordFormValid(): boolean;
  doChangePasswordsMatch(): boolean;
  isRegisterFormValid(): boolean;
  isForgotFormValid(): boolean;
  doRegisterPasswordsMatch(): boolean;
  getLoginFormInput(): {
    username: string;
    password: string;
  };
  getRegisterFormInput(): {
    username: string;
    password: string;
    confirmpassword: string;
    email: string;
  };
  getForgotFormInput(): any;
  getChangeEmailFormInput(): any;
  getChangePasswordFormInput(): {
    currentpassword: string;
    newpassword: string;
    confirmNewpassword: string;
  };
  loginToMelvorCloud(): any;
  registerToMelvorCloud(): any;
  registrationSuccessfulSwal(): void;
  forgotPasswordToMelvorCloud(): any;
  forgotPasswordSuccessfulSwal(): void;
  updateEmailAddress(): any;
  changeEmailSuccessfulSwal(): void;
  changePasswordToMelvorCloud(): any;
  changePasswordSuccessfulSwal(): void;
  saveDataFromJWT(data: any): void;
  JWTData: any;
  performJWTValidation(jwt: any): any;
  loginToMelvorCloudViaPOST(username: string, password: string): Promise<any>;
  registerToMelvorCloudViaPOST(
    username: string,
    password: string,
    confirmpassword: string,
    email: string
  ): Promise<any>;
  forgotPasswordToMelvorCloudViaPOST(email: string): Promise<any>;
  changeEmailMelvorCloudViaPOST(email: string): Promise<any>;
  changePasswordMelvorCloudViaPOST(
    currentpassword: string,
    newpassword: string
  ): Promise<any>;
  validateMelvorCloudToken(token: string): Promise<any>;
  showEnvContainer(): void;
  showPatreonConnectBtn(): void;
  showTestServerSelectionBtn(): void;
  showBaseGameBtn(): void;
  showTestServerBtn(): void;
  accessBaseGame(): void;
  accessTestServer(device?: string): void;
  connectToPatreon(): void;
  checkTestAccess(): any;
  checkPatreon(): any;
  getPatreonData(): Promise<any>;
  validatePatreonSubscription(data: any): boolean;
  getPlayFabSaveKey(saveSlot: number): string;
  getPlayFabSave(saveSlot: number): any;
  updateUIForPlayFabSignIn(): void;
  updateUIForMelvorCloudSignIn(): void;
  updateCharacterSelectManagePage(): void;
  updateUIForEntitlements(): void;
  connectionSuccessMelvorCloud(): void;
  connectionFailedMelvorCloud(): void;
  logout(): void;
  hasFullGame(): any;
  hasTotH(): any;
  getSteamPurchaseStatus(): any;
  getSteamExpansionPurchaseStatus(): any;
  getMobilePurchaseStatus(): any;
  getMobileExpansionStatus(): any;
  validateMobilePurchaseStatus(): any;
  validateMobileExpansionPurchaseStatus(): any;
  getPlayFabCreationDate(): any;
  compareCreationDates(): any;
  updateEntitlementsFromReceiptData(): void;
  checkMelvorCloudGrandfathered(): boolean;
  handleLoadingError(title: string, e: any): void;
}
declare const cloudManager: CloudManager;
