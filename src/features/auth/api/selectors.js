export const selectisAuth = (state) => state.auth.isAuth;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;

export const selectUserName = (state) => state.auth.user?.user_metadata?.firstName;
export const selectUserLastName = (state) => state.auth.user?.user_metadata?.lastName;
export const selectUserBirthDate = (state) => state.auth.user?.user_metadata?.birthDate;