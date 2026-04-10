    <SafeAreaProvider>
      <NavigationContainer
        onReady={() => RNBootSplash.hide()}
        ref={navigationRef}
        theme={DarkTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor="transparent" />
          <BottomSheetModalProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                headerTransparent: true,
                gestureEnabled: false,
                animationTypeForReplace: 'push',
                animationDuration: 350,
                animation: 'flip',
              }}
              initialRouteName='Main'>
              <Stack.Screen name="Main" component={TabBarNavigation} />
              <Stack.Screen name="Error" component={ErrorScreen} />
              <Stack.Screen name="Initiation" component={InitiationScreen} />
              <Stack.Screen name="ModeScreen" component={ModeScreen} />
              <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
              <Stack.Screen
                name="UpdateStartScreen"
                component={UpdateStartScreen}
              />
              <Stack.Screen name="DownloadScreen" component={DownloadScreen} />
              <Stack.Screen
                name="DownloadStartScreen"
                component={DownloadStartScreen}
              />
              <Stack.Screen
                name="LauncherDownloadScreen"
                component={LauncherDownloadScreen}
              />
              <Stack.Screen
                name="LauncherUpdateScreen"
                component={LauncherUpdateScreen}
              />
            </Stack.Navigator>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

const Tabs = AnimatedTabBarNavigator();
export const TabBarNavigation = React.memo(() => {
  return (
    <Tabs.Navigator
      initialRouteName="Играть"
      backBehavior={'initialRoute'}
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#b6c4ee7f',
        activeBackgroundColor: '#6b8afd',
      }}
      appearance={{
        shadow: false,
        floating: true,
        dotSize: DotSize.MEDIUM,
        tabBarBackground: '#212231',
      }}>
      <Tabs.Screen
        name="Донат"
        component={DonateScreen}
        options={{
          headerShown: true,
          animation: 'fade',
          headerTransparent: true,
          tabBarIcon: ({ color, size }: any) => (
            <Icons.WalletSvg width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Играть"
        component={GameScreen}
        options={{
          headerShown: true,
          animation: 'fade',
          headerTransparent: true,
          tabBarIcon: ({ color, size }: any) => (
            <Icons.PlaySvg width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Настройки"
        component={SettingsScreen}
        options={{
          headerShown: true,
          animation: 'fade',
          headerTransparent: true,
          tabBarIcon: ({ color, size }: any) => (
            <Icons.SettingSvg width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
});
