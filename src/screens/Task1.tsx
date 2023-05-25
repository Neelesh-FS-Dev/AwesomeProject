import React, {useState} from 'react';
import {View, TextInput, SectionList, Text} from 'react-native';

const ContactListApp = () => {
  const [contacts, setContacts] = useState([
    {name: 'John Smith', phone: '456-789-123'},
    {name: 'Jennifer Johnson', phone: '321-654-987'},
    {name: 'Robert Davis', phone: '135-579-246'},
    {name: 'Jessica Taylor', phone: '975-312-864'},
    {name: 'William Anderson', phone: '753-486-159'},
    {name: 'Karen Martinez', phone: '951-864-753'},
    {name: 'Richard Lee', phone: '369-258-147'},
    {name: 'Michelle Clark', phone: '147-369-258'},
    {name: 'Brian Hernandez', phone: '753-852-951'},
    {name: 'Samantha Thompson', phone: '369-147-258'},
    {name: 'Kevin Moore', phone: '258-369-147'},
    {name: 'Ashley Hall', phone: '147-258-369'},
    {name: 'Jonathan Young', phone: '852-951-753'},
    {name: 'Stephanie Adams', phone: '246-135-579'},
    {name: 'Christopher White', phone: '987-654-321'},
    {name: 'Melissa Brown', phone: '369-258-147'},
    {name: 'Matthew Davis', phone: '789-321-654'},
    {name: 'Amanda Wilson', phone: '456-789-123'},
    {name: 'Eric Johnson', phone: '123-456-789'},
    {name: 'Nicole Anderson', phone: '753-486-159'},
  ]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderContactItem = ({item}) => (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
      <Text style={{fontSize: 16}}>{item.phone}</Text>
    </View>
  );

  const renderSectionHeader = ({section}) => (
    <View style={{backgroundColor: '#f2f2f2', padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{section.title}</Text>
    </View>
  );

  const sectionData = contacts.reduce((acc, contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  const sections = Object.keys(sectionData)
    .sort()
    .map(letter => ({
      title: letter,
      data: sectionData[letter],
    }));

  return (
    <View style={{flex: 1, padding: 20}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={searchText}
        onChangeText={handleSearch}
        placeholder="Search contacts"
      />
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderContactItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default ContactListApp;
