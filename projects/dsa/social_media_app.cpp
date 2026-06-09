#include <iostream>
#include <string>
#include <stack>
#include <queue>
#include <fstream> 
using namespace std;

class Post {
public:
	int id;
	string content;

	Post(int pid, string c) {
		id = pid;
		content = c;
	}
};

class UserNode {
public:
	int userID;
	string username;
	int postCount;
	stack<Post> posts;
	queue<string> followers;
	UserNode* left;
	UserNode* right;

	UserNode(int id, string name) {
		userID = id;
		username = name;
		postCount = 0;
		left = right = nullptr;
	}
};

// ------------------ Social Media App ------------------ //
class SocialMediaApp {
private:
	UserNode* root;
	int userCounter;

	// Insert user in BST
	UserNode* insertUser(UserNode* node, int id, string username) {
		if (node == nullptr) {
			cout << "\nUser added! Name: " << username << " | ID: " << id << endl;
			return new UserNode(id, username);
		}
		if (id < node->userID)
			node->left = insertUser(node->left, id, username);
		else if (id > node->userID)
			node->right = insertUser(node->right, id, username);
		return node;
	}

	// Find by username
	UserNode* findUserByName(UserNode* node, string username) {
		if (node == nullptr) return nullptr;
		if (node->username == username) return node;

		UserNode* leftResult = findUserByName(node->left, username);
		if (leftResult != nullptr) return leftResult;

		return findUserByName(node->right, username);
	}

	// Find by ID
	UserNode* findUserByID(UserNode* node, int id) {
		if (node == nullptr) return nullptr;
		if (node->userID == id) return node;

		if (id < node->userID) return findUserByID(node->left, id);
		else return findUserByID(node->right, id);
	}

	// Inorder traversal
	void inOrder(UserNode* node) {
		if (node != nullptr) {
			inOrder(node->left);
			cout << "ID: " << node->userID << " | User: " << node->username
				<< " | Posts: " << node->postCount << endl;
			inOrder(node->right);
		}
	}

public:
	SocialMediaApp() {
		root = nullptr;
		userCounter = 0;
	}

	void registerUser(string username) {
		userCounter++;
		root = insertUser(root, userCounter, username);
	}

	void createPost() {
		cout << "\n--- Create a Post ---\n";
		cout << "1. By Username\n";
		cout << "2. By User ID\n";
		cout << "Choose: ";
		int opt;
		cin >> opt;
		cin.ignore();

		UserNode* user = nullptr;

		if (opt == 1) {
			string name;
			cout << "Enter username : ";
			getline(cin, name);
			user = findUserByName(root, name);
		}
		else if (opt == 2) {
			int id;
			cout << "Enter user ID : ";
			cin >> id;
			cin.ignore();
			user = findUserByID(root, id);
		}

		if (user == nullptr) {
			cout << "!! user not found !!\n";
			return;
		}

		string content;
		cout << "Type post: ";
		getline(cin, content);

		user->postCount++;
		Post newPost(user->postCount, content);
		user->posts.push(newPost);

		cout << "Post added for " << user->username << " (ID " << user->userID << ")\n";
	}

	void followUser() {
		cout << "\n--- Follow someone ---\n";
		cout << "1. By Username\n";
		cout << "2. By User ID\n";
		cout << "Choose: ";
		int opt;
		cin >> opt;
		cin.ignore();

		UserNode* u1 = nullptr;
		UserNode* u2 = nullptr;

		if (opt == 1) {
			string f1, f2;
			cout << "Enter your username : ";
			getline(cin, f1);
			cout << "Enter username to follow : ";
			getline(cin, f2);

			u1 = findUserByName(root, f1);
			u2 = findUserByName(root, f2);
		}
		else if (opt == 2) {
			int id1, id2;
			cout << "Enter your ID : ";
			cin >> id1;
			cout << "Enter ID to follow : ";
			cin >> id2;
			cin.ignore();

			u1 = findUserByID(root, id1);
			u2 = findUserByID(root, id2);
		}

		if (u1 == nullptr || u2 == nullptr) {
			cout << "user not found\n";
			return;
		}
		if (u1 == u2) {
			cout << " you cant follow yourself\n";
			return;
		}

		u2->followers.push(u1->username + " (ID " + to_string(u1->userID) + ")");
		cout << u1->username << " is now following " << u2->username << endl;
	}

	void viewPosts() {
		cout << "\n--- View Posts ---\n";
		cout << "1. By Username\n";
		cout << "2. By User ID\n";
		cout << "Choose: ";
		int opt;
		cin >> opt;
		cin.ignore();

		UserNode* user = nullptr;

		if (opt == 1) {
			string name;
			cout << "Enter username : ";
			getline(cin, name);
			user = findUserByName(root, name);
		}
		else if (opt == 2) {
			int id;
			cout << "Enter user ID : ";
			cin >> id;
			cin.ignore();
			user = findUserByID(root, id);
		}

		if (user == nullptr) {
			cout << "not found.\n";
			return;
		}
		if (user->posts.empty()) {
			cout << "no posts yet.\n";
			return;
		}

		cout << "Posts of " << user->username << ":\n";
		stack<Post> temp = user->posts;
		while (!temp.empty()) {
			cout << "[" << temp.top().id << "] " << temp.top().content << endl;
			temp.pop();
		}
	}

	void viewFollowers() {
		cout << "\n--- View Followers ---\n";
		cout << "1. By Username\n";
		cout << "2. By User ID\n";
		cout << "Choose: ";
		int opt;
		cin >> opt;
		cin.ignore();

		UserNode* user = nullptr;

		if (opt == 1) {
			string name;
			cout << "Enter username : ";
			getline(cin, name);
			user = findUserByName(root, name);
		}
		else if (opt == 2) {
			int id;
			cout << "Enter user ID : ";
			cin >> id;
			cin.ignore();
			user = findUserByID(root, id);
		}

		if (user == nullptr) {
			cout << "user not found\n";
			return;
		}
		if (user->followers.empty()) {
			cout << "no followers yet\n";
			return;
		}

		cout << "Followers of " << user->username << ":\n";
		queue<string> temp = user->followers;
		while (!temp.empty()) {
			cout << "- " << temp.front() << endl;
			temp.pop();
		}
	}

	void viewAllUsers() {
		cout << "\n--- All Users ---\n";
		inOrder(root);
	}

	void saveData(UserNode* node) {
		if (node == nullptr) return;

		ofstream userFile("users.txt", ios::app);
		userFile << node->userID << "," << node->username << "," << node->postCount << endl;
		userFile.close();

		ofstream postFile("posts.txt", ios::app);
		stack<Post> temp = node->posts;
		while (!temp.empty()) {
			postFile << node->userID << "," << temp.top().id << "," << temp.top().content << endl;
			temp.pop();
		}
		postFile.close();

		ofstream followFile("followers.txt", ios::app);
		queue<string> ftemp = node->followers;
		while (!ftemp.empty()) {
			followFile << node->userID << "," << ftemp.front() << endl;
			ftemp.pop();
		}
		followFile.close();

		saveData(node->left);
		saveData(node->right);
	}

	void saveAll() {
		ofstream clearUsers("users.txt"); clearUsers.close();
		ofstream clearPosts("posts.txt"); clearPosts.close();
		ofstream clearFollows("followers.txt"); clearFollows.close();

		saveData(root);
		cout << "data saved in files (users/posts/followers)\n";
	}
};

// ------------------ Main ------------------ //
int main() {
	SocialMediaApp app;
	int choice;

	do {
		cout << "\n========= Welcome to SocialMedia =========\n";
		cout << "1. Register User\n";
		cout << "2. Create Post\n";
		cout << "3. Follow User\n";
		cout << "4. View Posts\n";
		cout << "5. View Followers\n";
		cout << "6. View All Users\n";
		cout << "0. Exit\n";
		cout << "=================================\n";
		cout << "Enter choice: ";
		cin >> choice;
		cin.ignore();

		if (choice == 1) {
			string name;
			cout << "Enter username : ";
			getline(cin, name);
			app.registerUser(name);
		}
		else if (choice == 2) {
			app.createPost();
		}
		else if (choice == 3) {
			app.followUser();
		}
		else if (choice == 4) {
			app.viewPosts();
		}
		else if (choice == 5) {
			app.viewFollowers();
		}
		else if (choice == 6) {
			app.viewAllUsers();
		}
	} while (choice != 0);

	app.saveAll();

	cout << "\program ended.\n";
	return 0;
}
