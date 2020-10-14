<template>
  <v-container>
    <v-overlay :value="overlay" :absolute="absolute" :z-index="zIndex">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-snackbar v-model="snackbar" :color="color" top timeout="5000">
      <span class="subtitle-1">
        {{ message }}
      </span>
      <template v-slot:action="{ attrs }">
        <v-btn color="black" icon v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-data-table :headers="headers" :items="customers" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Customers Information</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialogAddOrEdit" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New Customer
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Customer Details Form</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.firstName"
                        label="First Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.lastName"
                        label="Last Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.gender"
                        label="Gender"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="editedItem.birthDate"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.birthDate"
                            label="Birthday"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.birthDate"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(editedItem.birthDate)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.edit="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import ApiService from '@/middleware/ApiService'
export default {
  data() {
    return {
      dialogAddOrEdit: false,
      overlay: false,
      absolute: true,
      zIndex: 1,
      snackbar: false,
      color: null,
      timeout: 5000,
      message: null,
      menu: false,
      headers: [
        {
          text: 'First Name',
          value: 'firstName',
          class: 'primary--text subtitle-1 font-weight-bold',
          align: 'start',
          sortable: false,
        },
        {
          text: 'Last Name',
          value: 'lastName',
          class: 'primary--text subtitle-1 font-weight-bold',
        },
        {
          text: 'Gender',
          value: 'gender',
          class: 'primary--text subtitle-1 font-weight-bold',
        },
        {
          text: 'Birthday',
          value: 'birthDate',
          class: 'primary--text subtitle-1 font-weight-bold',
        },
        {
          text: '',
          value: 'edit',
          class: 'primary--text subtitle-1 font-weight-bold',
        },
      ],
      customers: [],
      customer: {
        id: null,
        lastName: null,
        firstName: null,
        gender: null,
        birthDate: new Date().toISOString().substr(0, 7),
      },
      editedIndex: -1,
      editedItem: {
        id: null,
        lastName: null,
        firstName: null,
        gender: null,
        birthDate: new Date().toISOString().substr(0, 7),
      },
    }
  },
  async created() {
    this.getCustomers()
  },
  methods: {
    initialize() {
      // Any Initialization
    },
    editItem(item) {
      this.editedIndex = 1
      this.editedItem = {
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        gender: item.gender,
        birthDate: item.birthDate,
      }
      this.dialogAddOrEdit = true
    },
    close() {
      this.dialogAddOrEdit = false
      this.editedItem = {
        id: null,
        lastName: null,
        firstName: null,
        gender: null,
        birthDate: null,
      }
      this.editedIndex = -1
    },
    async save() {
      const data = {
        id: this.editedItem.id,
        firstName: this.editedItem.firstName,
        lastName: this.editedItem.lastName,
        gender: this.editedItem.gender,
        birthDate: this.editedItem.birthDate,
      }

      if (this.editedIndex > -1) {
        this.close()
        await this.updateCustomers(data)
      } else {
        this.close()
        await this.addCustomer(data)
      }
    },
    async getCustomers() {
      this.overlay = !this.overlay
      this.customers = await ApiService.getCustomers()
      this.overlay = !this.overlay
      // console.log(this.customers);
    },
    async addCustomer(data) {
      this.overlay = !this.overlay
      let results = await ApiService.addCustomer(data)

      if (results.status === 200) {
        this.customers = results.data
        this.message = 'Successfully Added Customer'
        this.snackbar = true
        this.color = 'green lighten-1'
      } else {
        this.customers = []
        this.message = 'An Error Occured while Adding Customer'
        this.snackbar = true
        this.color = 'red lighten-1'
      }

      this.overlay = !this.overlay
      // console.log(this.customers);
    },
    async updateCustomers(data) {
      this.overlay = !this.overlay
      let results = await ApiService.updateCustomer(data)

      if (results.status === 200) {
        this.customers = results.data
        this.message = 'Successfully Updated Customer'
        this.snackbar = true
        this.color = 'green lighten-1'
      } else {
        this.customers = []
        this.message = 'An Error Occured while Updating Customer'
        this.snackbar = true
        this.color = 'red lighten-1'
      }

      this.overlay = !this.overlay
      // console.log(this.customers);
    },
  },
}
</script>
