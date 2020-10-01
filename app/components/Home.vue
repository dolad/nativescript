<template>
  <Page
    actionBarHidden="true"
    class="pageSetup"
    xmlns="http://www.nativescript.org/tns.xsd"
  >
    <StackLayout class="topContainer">
      <StackLayout class="mt-4">
        <TextView editable="false">
          <FormattedString>
            <Span text="Create \n" class="textBig flip" />
            <Span text="an account \n " class="textBig flip" />
            <Span
              text="Fill the details & create your account"
              class="smallText "
            />
          </FormattedString>
        </TextView>
      </StackLayout>

      <StackLayout class="secondContainer">
        <StackLayout class="mt-1">
          <TextField
            :text="textFieldValue"
            hint="Username/ Email ID"
            autocorrect="false"
          />
        </StackLayout>

        <StackLayout class="mt-1">
          <TextField
            :text="textFieldValue"
            hint="Password"
            autocorrect="false"
          />
        </StackLayout>

        <StackLayout class="mt-1">
          <TextField
            :text="textFieldValue"
            hint="Confirm Password"
            autocorrect="false"
          />
        </StackLayout>

        <StackLayout class="mt-1">
          <Button text="Continue " class="bigButton" tap="onTap"></Button>
        </StackLayout>

        <!-- <StackLayout class="mt-2 row">
          <Label text=" or Sign in with..." textWrap="true" class="smallText" />
          <Button :text="'\uf09a'" class="fab socialBtn" />
          <Button :text="'\uf1a0'" class="fab socialBtn" />
        </StackLayout> -->
        <FlexboxLayout class="mt-2" alignItems="center" justifyContent="center">
          <Label text=" or Sign in with..." textWrap="true" class="smallText" />
        </FlexboxLayout>
        <FlexboxLayout class="mt-1" alignItems="center" justifyContent="center">
          <Button :text="'\uf09a'" class="fab socialBtn" />
          <Button :text="'\uf1a0'" class="fab socialBtn2" />
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      textFieldValue: ""
    };
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  }
};
</script>

<style scoped lang="scss">
// Custom styles
// .fas {
//   @include colorize($color: accent);
// }

.info {
  font-size: 20;
  vertical-align: center;
}
.aligncenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pageSetup {
  background-image: url("~/images/image1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.topContainer {
  padding: 5;
  margin: 10;
  border-radius: 5;
}
.textBig {
  font-size: 30;
  color: white;
}
.mt-1 {
  margin-top: 5;
}

.m2 {
  margin: 10;
}
.mt-2 {
  margin-top: 20;
}
.mt-4 {
  margin-top: 100;
}
.flip {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.pt-1 {
  padding-top: 10;
}
.smallText {
  font-size: 12;
  color: gainsboro;
  margin-top: 0;
}
.secondContainer {
  margin-top: 30;
}
TextField {
  border-width: 2;
  border-color: hsl(32, 100%, 50%);
  border-radius: 30;
  height: 50;
  color: white;
  placeholder-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-position: 0% 50%;
  padding-left: 25;
  font-size: 14;
}
.bigButton {
  background-color: hsl(32, 100%, 50%);
  border-radius: 30;
}
.socialBtn {
  font-size: 40;
  width: 40;
  height: 40;
  color: #1877f2;
  border-radius: 20;
  background-color: transparent;
}
.socialBtn2 {
  font-size: 40;
  width: 50;
  height: 50;
  color: red;
  border-radius: 25;
  background-color: transparent;
  left: -10;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>

<!-- -->
